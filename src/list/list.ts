import type { IList, INode } from "./ilist.js";

export default class LinkedList<T> implements IList<T> {
    private head: INode<T> | null = null;
    public size = 0;

    public get(index: number): T | null {
        if (!Number.isInteger(index) || index < 0 || index >= this.size) return null;

        let current = this.head;
        let i = 0;

        while (current !== null && i < index) {
            current = current.next;
            i++;
        }

        return current?.value ?? null;
    }

    public insert(index: number, value: T): T {
        if (!Number.isInteger(index) || index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        const node: INode<T> = { value, next: null };

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let previous = this.head;

            for (let i = 0; i < index - 1; i++) {
                previous = previous?.next ?? null;
            }

            if (previous === null) throw new Error("Index out of bounds");

            node.next = previous.next;
            previous.next = node;
        }

        this.size++;
        return value;
    }

    public append(value: T): T {
        const node: INode<T> = { value, next: null };

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
        return node.value;
    }

    public modify(index: number, value: T): T {
        if (this.head === null) throw new Error("List is empty");
        if (!Number.isInteger(index) || index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next ?? this.head;
        }

        current.value = value;
        return current.value;
    }

    public find(value: T): INode<T> | null {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) return current;
            current = current.next;
        }

        return null;
    }

    public remove(index: number): T {
        if (!Number.isInteger(index) || index < 0 || index >= this.size || this.head === null) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            const value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            if (current.next === null) throw new Error("Index out of bounds");
            current = current.next;
        }

        const nodeToRemove = current.next;
        if (nodeToRemove === null) throw new Error("Index out of bounds");

        current.next = nodeToRemove.next;
        this.size--;
        return nodeToRemove.value;
    }

    public clear(): void {
        this.head = null;
        this.size = 0;
    }

    public toString(separator: string = ", "): string {
        const values: T[] = [];
        let current = this.head;

        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }

        return values.join(separator);
    }
}
