import type { IList } from "../list/ilist.js";
import LinkedList from "../list/list.js";
import type { IStack } from "./istack.js";

export default class ListStack<T> implements IStack<T> {
    private list: IList<T> = new LinkedList<T>();

    push(value: T): T {
        this.list.append(value);
        return value;
    }
    pop(): T | null {
        try {
            return this.list.remove(this.size - 1);
        } catch {
            return null;
        }
    }
    peek(): T | null {
        return this.list.get(this.size - 1);
    }
    isEmpty(): boolean {
        return this.size === 0;
    }
    clear(): void {
        this.list.clear();
    }
    toString(separator: string = ", "): string {
        return this.list.toString(separator);
    }

    public get size(): number {
        return this.list.size;
    }
}
