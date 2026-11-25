/**
 * Retorna o número que está na posição informada da sequência de Fibonacci.
 *
 * @param n Índice não negativo e inteiro da sequência.
 * @returns O valor de Fibonacci correspondente ao índice.
 * @throws Lança um erro quando o índice não é inteiro ou é negativo.
 */
export const fibonacci = (n: number): number => {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("Precisa ser um inteiro não negativo");
    }

    if (n === 0) return 0;

    let prev2 = 0;
    let prev1 = 1;

    for (let i = 2; i <= n; i++) {
        const current = prev2 + prev1;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};

export default fibonacci;
