import { describe, expect, it } from "vitest";
import fibonacci from "../../src/arrays/fibonacci.js";

describe("fibonacci", () => {
    it.each([
        [0, 0],
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 5],
        [6, 8],
        [10, 55],
    ])("retorna %i como resultado do índice %i", (index, expected) => {
        expect(fibonacci(index)).toBe(expected);
    });

    it.each([-1, -10])("lança erro para o índice negativo %i", (index) => {
        expect(() => fibonacci(index)).toThrow(/inteiro não negativo/i);
    });

    it.each([1.5, NaN, Infinity])("lança erro para o índice não inteiro %s", (index) => {
        expect(() => fibonacci(index)).toThrow(/inteiro não negativo/i);
    });
});
