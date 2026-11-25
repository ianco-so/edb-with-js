import { beforeEach, describe, expect, it } from "vitest";
import LinkedList from "../../src/list/list.js";

describe("LinkedList", () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
    });

    const populate = (...values: number[]): LinkedList<number> => {
        for (const value of values) list.append(value);
        return list;
    };

    describe("estado inicial", () => {
        it("começa vazia", () => {
            expect(list.size).toBe(0);
            expect(list.toString()).toBe("");
        });

        it("não encontra valores em uma lista vazia", () => {
            expect(list.find(31)).toBeNull();
        });

        it("retorna null ao acessar uma lista vazia", () => {
            expect(list.get(-1)).toBeNull();
            expect(list.get(0)).toBeNull();
            expect(list.get(1)).toBeNull();
        });
    });

    describe("append", () => {
        it("adiciona elementos ao fim e atualiza o tamanho", () => {
            list.append(27);
            list.append(28);

            expect(list.size).toBe(2);
            expect(list.toString()).toBe("27, 28");
        });

        it("mantém a ordem ao adicionar vários elementos", () => {
            populate(27, 28, 29);

            expect([list.get(0), list.get(1), list.get(2)]).toEqual([27, 28, 29]);
        });
    });

    describe("get", () => {
        it("retorna o valor de um índice válido", () => {
            populate(27, 28, 29);

            expect(list.get(0)).toBe(27);
            expect(list.get(1)).toBe(28);
            expect(list.get(2)).toBe(29);
        });

        it.each([-1, 3, 100])("retorna null para o índice inválido %i", (index) => {
            populate(27, 28, 29);

            expect(list.get(index)).toBeNull();
        });
    });

    describe("insert", () => {
        it("insere elementos nas posições e retorna o valor", () => {
            populate(23, 25, 26);

            expect(list.insert(0, 22)).toBe(22);
            expect(list.insert(2, 24)).toBe(24);
            expect(list.insert(5, 27)).toBe(27);
            expect(list.toString()).toBe("22, 23, 24, 25, 26, 27");
            expect(list.size).toBe(6);
        });

        it("insere no fim quando o índice é igual ao tamanho", () => {
            populate(23, 25);

            list.insert(2, 26);

            expect(list.toString()).toBe("23, 25, 26");
        });

        it.each([-1, 4])("lança erro para o índice inválido %i", (index) => {
            populate(23, 25, 26);

            expect(() => list.insert(index, 30)).toThrowError(/index out of bounds/i);
        });

        it("lança erro para índice decimal", () => {
            expect(() => list.insert(1.5, 30)).toThrowError(/index out of bounds/i);
        });
    });

    describe("modify", () => {
        beforeEach(() => populate(26, 27, 28, 29, 30, 31));

        it("modifica valores existentes e retorna o novo valor", () => {
            expect(list.modify(0, 36)).toBe(36);
            expect(list.modify(2, 38)).toBe(38);
            expect(list.modify(5, 41)).toBe(41);

            expect([list.get(0), list.get(2), list.get(5)]).toEqual([36, 38, 41]);
        });

        it("remove o valor anterior do índice modificado", () => {
            list.modify(0, 36);
            list.modify(2, 38);
            list.modify(5, 41);

            expect(list.find(26)).toBeNull();
            expect(list.find(28)).toBeNull();
            expect(list.find(31)).toBeNull();
        });

        it.each([-1, 6, 1.5])("lança erro para o índice inválido %i", (index) => {
            expect(() => list.modify(index, 99)).toThrowError(/index out of bounds/i);
        });

        it("lança erro ao modificar uma lista vazia", () => {
            const emptyList = new LinkedList<number>();

            expect(() => emptyList.modify(0, 99)).toThrowError(/list is empty/i);
        });
    });

    describe("find", () => {
        it("retorna o primeiro nó que contém o valor", () => {
            populate(26, 27, 28, 29, 30, 31);

            expect(list.find(26)?.value).toBe(26);
            expect(list.find(28)?.value).toBe(28);
            expect(list.find(31)?.value).toBe(31);
            expect(list.find(85)).toBeNull();
        });

        it("retorna null quando o valor não existe", () => {
            populate(26, 27, 28);

            expect(list.find(85)).toBeNull();
        });
    });

    describe("remove", () => {
        beforeEach(() => populate(26, 27, 28, 29, 30, 31));

        it("remove o primeiro elemento", () => {
            expect(list.remove(0)).toBe(26);
            expect(list.size).toBe(5);
            expect(list.get(0)).toBe(27);
        });

        it("remove elementos do meio e do fim", () => {
            expect(list.remove(1)).toBe(27);
            expect(list.remove(3)).toBe(30);

            expect(list.size).toBe(4);
            expect(list.toString()).toBe("26, 28, 29, 31");
        });

        it("não mantém valores removidos na lista", () => {
            list.remove(0);
            list.remove(1);
            list.remove(3);

            expect(list.find(26)).toBeNull();
            expect(list.find(28)).toBeNull();
            expect(list.find(31)).toBeNull();
        });

        it.each([-1, 6, 100])("lança erro para o índice inválido %i", (index) => {
            expect(() => list.remove(index)).toThrowError(/index out of bounds/i);
        });

        it("lança erro ao remover de uma lista vazia", () => {
            const emptyList = new LinkedList<number>();

            expect(() => emptyList.remove(0)).toThrowError(/index out of bounds/i);
        });
    });

    describe("clear", () => {
        it("remove todos os elementos", () => {
            populate(26, 27, 28);

            list.clear();

            expect(list.size).toBe(0);
            expect(list.get(0)).toBeNull();
            expect(list.toString()).toBe("");
        });
    });

    describe("toString", () => {
        it("retorna os valores separados por vírgula", () => {
            populate(26, 27, 28);

            expect(list.toString()).toBe("26, 27, 28");
        });
    });
});
