/**
 * Interface para um stack (pilha) genérica.
 * @description Uma stack (pilha) é uma estrutura de dados que segue o princípio LIFO (Last In, First Out),
 * onde o último elemento adicionado é o primeiro a ser removido.
 * Assim como uma pilha de pratos,
 * você adiciona e remove elementos do topo da pilha. Diferente de uma lista encadeada,
 * uma stack não permite acesso aleatório aos elementos,
 * apenas ao elemento no topo da pilha, e não permite a inserção ou remoção de elementos em posições arbitrárias.
 * @interface IStack
 * @template T O tipo de elementos que a stack irá armazenar.
 */
export interface IStack<T> {
    /**
     * Adiciona um elemento ao topo da stack.
     * @param value O valor a ser adicionado ao topo da stack.
     * @returns O valor que acabou de ser adicionado à stack.
     */
    push(value: T): T;
    /**
     * Remove e retorna o elemento do topo da stack.
     * @returns O elemento removido do topo da stack, ou `null` se a stack estiver vazia.
     */
    pop(): T | null;
    /**
     * Retorna o elemento do topo da stack sem removê-lo.
     * @returns O elemento no topo da stack, ou `null` se a stack estiver vazia.
     */
    peek(): T | null;
    /**
     * Verifica se a stack está vazia.
     * @returns `true` se a stack estiver vazia, caso contrário `false`.
     */
    isEmpty(): boolean;
    /**
     * Limpa todos os elementos da stack.
     * @returns `void`.
     */
    clear(): void;
    /**
     * Retorna o número de elementos na stack.
     * @returns O tamanho da stack.
     */

    /**
     * Formata a pilha de em uma string bonita para ser usada depois
     * @param separator separador opcional dos elementos da pilha
     * @returns Uma string com o separador (se tiver, se não será uma ',').
     */
    toString(separator?: string): string;
    readonly size: number;
}
