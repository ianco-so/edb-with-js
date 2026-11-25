import { beforeEach, describe, expect, it } from "vitest";
import type { IStack } from "../../src/stack/istack.js";
import ArrayStack from "../../src/stack/ArrayStack.js";
import ListStack from "../../src/stack/listStack.js";

describe.each([
    { name: "ArrayStack", create: () => new ArrayStack<number>() },
    { name: "ListStack", create: () => new ListStack<number>() },
])("$name", ({ create }) => {
    let stack: IStack<number>;

    beforeEach(() => {
        stack = create();
    });

    const populate = (...values: number[]): void => {
        for (const value of values) {
            stack.push(value);
        }
    };

    it("começa vazia", () => {
        expect(stack.size).toBe(0);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.peek()).toBeNull();
        expect(stack.pop()).toBeNull();
    });

    it("adiciona elementos no topo", () => {
        expect(stack.push(10)).toBe(10);
        expect(stack.size).toBe(1);
        expect(stack.peek()).toBe(10);
        expect(stack.push(20)).toBe(20);
        expect(stack.pop()).toBe(20);
        expect(stack.pop()).toBe(10);
        expect(stack.isEmpty()).toBe(true);
    });

    it("pop remove o último elemento", () => {
        populate(1, 2, 3, 4);

        expect(stack.pop()).toBe(4);
        expect(stack.size).toBe(3);
    });

    it("limpa todos os elementos", () => {
        populate(1, 2, 3, 4);
        stack.clear();

        expect(stack.size).toBe(0);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.peek()).toBeNull();
    });

    it("toString retorna os elementos na ordem correta", () => {
        populate(1, 2, 3);
        expect(stack.toString()).toBe("1, 2, 3");
        expect(stack.toString("-")).toBe("1-2-3");
    });
});
