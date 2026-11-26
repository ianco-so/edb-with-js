import type { IStack } from "./istack.js";

export default class ArrayStack<T> implements IStack<T> {
    private items: T[] = [];

    public get size(): number {
        return this.items.length;
    }

    public push(item: T): T {
        this.items.push(item);
        return item;
    }

    public pop(): T | null {
        return this.items.pop() ?? null;
    }

    public peek(): T | null {
        return this.items.at(this.size - 1) ?? null;
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    public clear(): void {
        this.items.length = 0;
    }

    public toString(separator: string = " <- "): string {
        const reversedItems = [...this.items].reverse();
        return reversedItems.map(String).join(separator);
    }
}
