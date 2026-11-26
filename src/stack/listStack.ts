import type { IList } from "../list/ilist.js";
import LinkedList from "../list/list.js";
import type { IStack } from "./istack.js";

export default class ListStack<T> implements IStack<T> {
    private list: IList<T> = new LinkedList<T>();

    push(value: T): T {
        this.list.insert(0, value);
        return value;
    }

    pop(): T | null {
        try {
            return this.list.remove(0);
        } catch {
            return null;
        }
    }

    peek(): T | null {
        return this.list.get(0);
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    clear(): void {
        this.list.clear();
    }

    toString(separator: string = " <- "): string {
        const elements: string[] = [];
        for (let i = 0; i < this.size; i++) {
            const value = this.list.get(i);
            if (value !== null) {
                elements.push(String(value));
            }
        }
        return elements.join(separator);
    }

    public get size(): number {
        return this.list.size;
    }
}
