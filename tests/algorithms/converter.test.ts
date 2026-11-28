import { describe, expect, it } from "vitest";
import { decimalTo, binaryToDecimal } from "../../src/algorithms/converter.js";

describe("decimalTo", () => {
    it.each([
        { decimal: 0, base: 2, expected: "0" },
        { decimal: 1, base: 2, expected: "1" },
        { decimal: 0, base: 16, expected: "0" },
        { decimal: 15, base: 16, expected: "F" },
        { decimal: 0, base: 32, expected: "0" },
        { decimal: 31, base: 32, expected: "V" },
        { decimal: 0, base: 15, expected: "0" },
        { decimal: 14, base: 15, expected: "E" },
    ])(
        'retorna "$expected" como resultado do decimal $decimal na base $base',
        ({ decimal, base, expected }) => {
            expect(decimalTo(decimal, base)).toBe(expected);
        },
    );

    it.each([1.5, -1, NaN, Infinity])("lança erro para decimais não naturais %s", (decimal) => {
        expect(() => decimalTo(decimal, 2)).toThrow(/positive integer/i);
    });

    it.each([3.5, -1, 1, 33, NaN, Infinity])(
        "lança erro para bases não naturais ou fora das fronteiras %s",
        (base) => {
            expect(() => decimalTo(0, base)).toThrow(/must be an integer/i);
        },
    );
});

describe("binaryToDecimal", () => {
    const MAX_BINARY = "1".repeat(53) + "0".repeat(971);
    it.each([
        { binary: " 0", expected: 0 },
        { binary: "1 ", expected: 1 },
        { binary: "1010", expected: 10 },
        { binary: MAX_BINARY, expected: Number.MAX_VALUE },
    ])('para o binário "$binary" o decimal é "$expected"', ({ binary, expected }) => {
        expect(binaryToDecimal(binary)).toBe(expected);
    });

    const MAX_STRING_SIZE = "1" + "0".repeat(1024);
    it.each(["", MAX_STRING_SIZE, "-0", "-1", "a"])(
        'para a string "%s" deve lançar um erro',
        (binary) => {
            expect(() => binaryToDecimal(binary)).toThrow(/must be a string of 0s and 1s/i);
        },
    );

    it("Para binário além do limite do Number deve retorar infinito", () => {
        const OVERFLOW_BINARY = "1".repeat(54) + "0".repeat(970);
        expect(binaryToDecimal(OVERFLOW_BINARY)).toBe(Number.POSITIVE_INFINITY);
    });
});
