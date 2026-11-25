export interface IList<T> {
    readonly size: number;

    /**
     * Passando um indice válido deve retornar o valor correspondente na lista,
     * caso seja um indice inválido retorna nulo.
     * @param index o indice da lista encadeada
     * @returns valor correspondente ao indice passado ou nulo
     */
    get(index: number): T | null;
    /**
     * Passando um indice válido e um valor,
     * o valor é inserido na lista encadeada no indice passado,
     * caso o indice seja inválido lança um erro
     * @param index indice da lista encadeada
     * @param value valor a ser inserido na lista encadeada
     * @returns o valor recém inserido
     * @throws Lança um erro caso o indice seja inválido
     */
    insert(index: number, value: T): T;
    /**
     * Passando um indice e um valor,
     * o valor é modificado na lista encadeada no indice passado,
     * caso o indice seja inválido lança um erro
     * @param index indice da lista que você quer modificar um valor
     * @param value valor a ser modificado
     * @returns o valor recém inserido
     * @throws OutOfBounds e Um erro caso você tente modificar um valor de uma lista vazia
     */
    modify(index: number, value: T): T;
    /**
     * Procura o valor passado na lista,
     * caso encontre retorna o nó,
     * caso não encontre retorna nulo
     * @param value O valor a ser encontrado
     * @returns O primeiro nó que tem o valor procurado ou nulo caso não encontre
     */
    find(value: T): INode<T> | null;
    /**
     * Adiciona um valor no fim da lista encadeada
     * @param value
     * @returns O valor que acabou de ser passado e foi adicionado na lista
     */
    append(value: T): T;
    /**
     * Remove o valor em um indice indicado, caso o indice seja inválido lança um erro
     * @param index Indice do valor a ser removido
     * @returns o valor do nó que acabou de ser removido
     * @throws Joga um erro caso o indice passádo seja inválido
     */
    remove(index: number): T;
    /**
     * Releta todos os indices
     */
    clear(): void;
    /**
     * Mostra o lista encadeada em um formato bonito de string
     */
    toString(separator?: string): string;
}

export interface INode<T> {
    /**
     * Valor real do nó (o que quer ser guardado)
     */
    value: T;
    /**
     * O próximo valor que o nó aponta para formar uma lista encadeada
     */
    next: INode<T> | null;
}
