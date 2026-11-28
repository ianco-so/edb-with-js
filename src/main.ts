import { binaryToDecimal, decimalTo } from "./algorithms/converter.js";
import fibonacci from "./algorithms/fibonacci.js";
import LinkedList from "./list/list.js";

console.log("Sequência de Fibonacci:");

for (let i = 0; i <= 10; i++) {
    console.log(`fib(${i}) = ${fibonacci(i)}`);
}

console.log("Converter de Decimal para outras bases:");
for (let i = 2; i <= 32; i *= 2) {
    console.log(`Na base ${i}:`);
    for (let j = 10; j < 50; j += 10) {
        console.log(`${j} = ${decimalTo(j, i)}`);
    }
    console.log();
}

console.log("Converter de Binário para Decimal:");
for (let j = 10; j < 100; j += 10) {
    console.log(`${decimalTo(j, 2)} = ${binaryToDecimal(decimalTo(j, 2))}`);
}

console.log("Teste de max number");
console.log(`${decimalTo(Number.MAX_VALUE, 2)}`);

const list = new LinkedList<string>();
list.append("Estrutura");
list.append("de dados");
list.insert(1, "ligada");

console.log("\nLista encadeada:");
console.log(list.toString());
