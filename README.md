# Estruturas de Dados com TypeScript

Projeto para estudar TypeScript e estruturas de dados. Ele usa npm para gerenciar dependências, Vitest para testes e cobertura, ESLint para análise estática e Prettier para formatação.

## Pré-requisitos

- Node.js 26 ou superior.
- npm.
- VS Code recomendado para a configuração de depuração incluída.

Na pasta raiz, instale as dependências:

```powershell
npm install
```

Para reproduzir exatamente as versões do `package-lock.json`:

```powershell
npm ci
```

## Estrutura do projeto

```text
src/
├── arrays/
│   └── fibonacci.ts       # Sequência de Fibonacci
├── list/
│   ├── ilist.ts           # Contratos IList e INode
│   └── list.ts            # Lista encadeada genérica
├── index.ts               # Ponto de exportação público
└── main.ts                # Programa demonstrativo

tests/
├── arrays/
│   └── fibonacci.test.ts
└── list/
    └── list.test.ts

.github/workflows/ci.yml   # Integração contínua
.vscode/launch.json        # Configurações de depuração
eslint.config.js           # Regras do ESLint
.prettierrc.json           # Regras do Prettier
vitest.config.ts           # Configuração dos testes
tsconfig.json              # Configuração geral de tipos
tsconfig.build.json        # Configuração exclusiva da biblioteca
```

Os arquivos gerados não são enviados ao repositório:

- `node_modules/` contém dependências.
- `dist/` contém a compilação.
- `coverage/` contém relatórios de testes.

## Executando o projeto

Execute o arquivo demonstrativo:

```powershell
npm start
```

Execute em modo de observação:

```powershell
npm run dev
```

## Bibliotecas implementadas

### Fibonacci

Local: `src/arrays/fibonacci.ts`

A função `fibonacci(n)` recebe um índice inteiro e não negativo da sequência:

```typescript
import { fibonacci } from "edb-with-js";

fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(10); // 55
```

Valores negativos, decimais, `NaN` e infinito lançam um erro.

### Lista encadeada

Local: `src/list/list.ts`

`LinkedList<T>` é uma lista encadeada genérica. Os contratos estão em `src/list/ilist.ts`.

```typescript
import { LinkedList } from "edb-with-js";

const list = new LinkedList<number>();

list.append(27);
list.append(29);
list.insert(1, 28);

list.get(1); // 28
list.toString(); // "27, 28, 29"
```

Operações disponíveis:

- `append(value)` adiciona ao fim.
- `insert(index, value)` insere em uma posição válida.
- `get(index)` obtém um elemento ou retorna `null`.
- `modify(index, value)` modifica um elemento existente.
- `find(value)` retorna o nó correspondente ou `null`.
- `remove(index)` remove e retorna um elemento.
- `clear()` remove todos os elementos.
- `toString()` retorna os elementos separados por vírgula.
- `size` informa a quantidade de elementos.

## Estrutura dos testes

Os testes ficam em `tests/` e são isolados da compilação da biblioteca.

- `describe` agrupa comportamentos relacionados.
- `beforeEach` prepara uma nova instância antes de cada teste.
- `it` define um comportamento verificável.
- `it.each` reutiliza casos com entradas diferentes.
- `expect` verifica valores e erros.

Execute os testes:

```powershell
npm test
```

Execute continuamente:

```powershell
npm run test:watch
```

## Cobertura de testes

```powershell
npm run test:coverage
```

A configuração em `vitest.config.ts` gera relatórios no terminal e nas pastas `coverage/` em formatos HTML, LCOV e JSON.

Os limites mínimos exigidos são:

- 95% de instruções cobertas.
- 85% de branches cobertos.
- 100% de funções cobertas.
- 100% das linhas cobertas.

Se qualquer limite não for atingido, o comando `npm run test:coverage` falhará.

## Verificação de qualidade

Verifique tipos:

```powershell
npm run check
```

Execute o lint:

```powershell
npm run lint
```

Verifique a formatação sem alterar arquivos:

```powershell
npm run format:check
```

Formate o projeto:

```powershell
npm run format
```

Execute a validação completa:

```powershell
npm run validate
```

O comando `validate` executa formatação, lint, tipos e testes nessa ordem.

## Compilação da biblioteca

Compile os arquivos da biblioteca para `dist/`:

```powershell
npm run build
```

A compilação usa `tsconfig.build.json`, portanto os testes não fazem parte do pacote gerado.

## Depuração no VS Code

A configuração está em `.vscode/launch.json`.

1. Abra o arquivo desejado.
2. Coloque pontos de parada.
3. Pressione `F5`.
4. Selecione **Depurar projeto (main.ts)** ou **Depurar testes Vitest**.

Também é possível executar apenas o projeto com:

```powershell
npm run debug
```

## Integração contínua

O workflow `.github/workflows/ci.yml` executa automaticamente em `push` e `pull_request`:

1. Instalação limpa com `npm ci`.
2. Verificação de formatação.
3. Execução do lint.
4. Verificação de tipos.
5. Testes com cobertura.
6. Compilação da biblioteca.

## Resumo dos comandos

| Comando                 | Finalidade                                           |
| ----------------------- | ---------------------------------------------------- |
| `npm ci`                | Instala exatamente as versões do lockfile            |
| `npm start`             | Executa `src/main.ts`                                |
| `npm run dev`           | Executa continuamente com reinicialização automática |
| `npm run debug`         | Executa o projeto em modo de depuração               |
| `npm test`              | Executa os testes uma vez                            |
| `npm run test:watch`    | Observa alterações e reexecuta os testes             |
| `npm run test:coverage` | Executa testes e gera cobertura                      |
| `npm run check`         | Verifica os tipos TypeScript                         |
| `npm run lint`          | Analisa o código com ESLint                          |
| `npm run format:check`  | Verifica formatação                                  |
| `npm run format`        | Formata todos os arquivos suportados                 |
| `npm run validate`      | Executa todas as verificações locais                 |
| `npm run build`         | Compila apenas os arquivos da biblioteca             |
