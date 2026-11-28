/**
 * Esse arquivo é parte do projeto para EDB com TypeScript,
 * aqui eu vou ter a implementação de algoritmos de conversão de binário para decimal e decimal para binário.
 *
 * @author Ianco Soares Oliveira
 * @version 1.0.0
 * @license MIT
 */

import type { IStack } from "../stack/istack.js";
import ListStack from "../stack/listStack.js";

/**
 * Converte um número decimal para qualquer outra base entre 2 e 32.
 * @param decimal O número decimal a ser convertido.
 * @param base A base para a qual converter o número decimal. O valor padrão é 2 (binário).
 * @returns A representação na base especificada do número decimal.
 * @throws Caso o número passado não seja um inteiro positivo lança um erro.
 * @throws Caso a base passada não seja um inteiro entre 2 e 32 lança um erro.
 */
export const decimalTo = (decimal: number, base: number = 2): string => {
    if (!Number.isInteger(decimal) || decimal < 0)
        throw new Error("decimal must be a positive integer");
    if (!Number.isInteger(base) || base < 2 || base > 32)
        throw new Error(
            "base must be an integer greater than or equal to 2 and less than or equal to 32",
        );

    const digits = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
    ] as const;
    const pilha: IStack<string> = new ListStack<string>();

    do {
        const rem = decimal % base;
        decimal = Math.trunc(decimal / base);
        pilha.push(digits[rem % digits.length]!);
    } while (decimal >= 1);

    return pilha.toString("");
};

/**
 * Converte um número binário para decimal.
 * @param binary O número binário a ser convertido no formato de string.
 * @returns A representação decimal do número binário.
 * @throws Caso a string passada não seja composta apenas por 0s e 1s lança um erro.
 * @author Ianco Soares
 */
export const binaryToDecimal = (binary: string): number => {
    binary = binary.trim();
    if (!/^[01]{1,1024}$/.test(binary))
        throw new Error("binary must be a string of 0s and 1s in range {1,1024} caracteres");
    let decimal = 0;
    const length = binary.length;
    for (let i = 0; i < length; i++) {
        if (binary[i] === "1") {
            decimal += Math.pow(2, length - 1 - i);
        }
    }
    return decimal;
};
