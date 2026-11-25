import { beforeEach, describe, expect, it } from "vitest";
import ArrayStack from "../../src/stack/ArrayStack.js";

describe("ArrayStack", () => {
    let stack: ArrayStack<number>;

    beforeEach(() => {
        stack = new ArrayStack<number>();
    });

    const populate = (...values: number[]): ArrayStack<number> => {
        for (const value of values) stack.push(value);
        return stack;
    };

    describe("estado inical", () => {
        it("começa vazia", () => {
            expect(stack.size).toBe(0);
            expect(stack.toString()).toBe("");
            expect(stack.isEmpty()).toBeTruthy();
        });
        it("retornos devem ser nulos", () => {
            expect(stack.pop()).toBeNull();
            expect(stack.peek()).toBeNull();
        });
    });

    describe("push", () => {
        it("push em uma pilha recém criada deve ter tamanho 1", () => {
            stack.push(1);
            expect(stack.size).toBe(1);
        });

        it("push em uma pilha com elementos deve ter tamanho correto", () => {
            populate(1, 2, 3);
            expect(stack.size).toBe(3);
        });
    });

    describe("pop", () => {
        it("pop em uma pilha com 4 elementos deve ter 3 elementos", () => {
            populate(1, 2, 3, 4);
            expect(stack.pop()).toBe(4);
            expect(stack.size).toBe(3);
        });
    });

    describe("peek", () => {
        it("peek em uma pilha deve retornar último elemento", () => {
            populate(1, 2, 3, 4);
            expect(stack.peek()).toBe(4);
        });
    });

    describe("isEmpty", () => {
        it("isEmpty em uma pilha vázia deve ser true", () => {
            expect(stack.isEmpty()).toBeTruthy();
        });
        it("isEmpty em uma pilha populada deve ser false", () => {
            populate(1, 2, 3, 4);
            expect(stack.isEmpty()).toBeFalsy();
        });
    });

    describe("clear", () => {
        it("limpar uma lista vazia deve retornar o tamanho vázio", () => {
            stack.clear();
            expect(stack.size).toBe(0);
            expect(stack.peek()).toBeNull();
            expect(stack.pop()).toBeNull();
            expect(stack.isEmpty()).toBeTruthy();
        });
        it("isEmpty em uma pilha populada deve ser false", () => {
            populate(1, 2, 3, 4);
            stack.clear();

            expect(stack.size).toBe(0);
            expect(stack.peek()).toBeNull();
            expect(stack.pop()).toBeNull();
            expect(stack.isEmpty()).toBeTruthy();
        });
    });
});
