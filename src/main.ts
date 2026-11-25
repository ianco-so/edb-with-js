import fibonacci from "./arrays/fibonacci.js";
import LinkedList from "./list/list.js";

console.log("Sequência de Fibonacci:");

for (let i = 0; i <= 10; i++) {
    console.log(`fib(${i}) = ${fibonacci(i)}`);
}

const list = new LinkedList<string>();
list.append("Estrutura");
list.append("de dados");
list.insert(1, "ligada");

console.log("\nLista encadeada:");
console.log(list.toString());
