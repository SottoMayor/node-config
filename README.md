# Configuração de API Node.js com Typescript, Jest, Knex e Express

Este é um guia passo a passo para configurar uma API em Node.js com Typescript, Jest, Knex e Express.

## Pré-requisitos

Antes de começar, inicialize o git na máquina e coloque o node_modules no .gitignore. É claro, certifique-se de ter o Node.js instalado em sua máquina. 

## 1. Inicializando o npm

Execute o seguinte comando para inicializar o npm em seu projeto:

```bash
npm init --y
```

## 2. Instalando Typescript como dependência de desenvolvimento

Instale o Typescript executando o seguinte comando:

```bash
npm install --save-dev typescript
```

## 3. Criando arquivo de configuração do Typescript

Crie um arquivo de configuração do Typescript executando o seguinte comando:

```bash
npx tsc --init
```

## 4. Instalando Jest e suas tipagens como dependências de desenvolvimento

Instale o Jest e suas tipagens executando o seguinte comando:

```bash
npm install --save-dev jest ts-jest @types/jest
```

## 5. Instalando tipagens do Node e ferramenta de monitoração de desenvolvimento

Instale as tipagens do Node e a ferramenta de monitoração de desenvolvimento executando o seguinte comando:

```bash
npm install --save-dev @types/node ts-node-dev
```

## 6. Configuração do tsconfig.json e criação da pasta src

Configure o `tsconfig.json` e crie a pasta `src` para seus arquivos TypeScript.

## 7. Adicionando comando de desenvolvimento

Adicione o comando de desenvolvimento com a porta de entrada em `app.ts`.

## 8. Configurando Jest e adicionando comando de testes

Configure o Jest e adicione o comando de testes executando o seguinte comando:

```bash
npx ts-jest config:init
```

## 9. Adicionando comando de transpilação

Adicione o comando de transpilação (build).

## 10. Instalando Knex e o driver do Postgres

Instale o Knex e o driver do Postgres executando o seguinte comando:

```bash
npm install --save knex pg
```

## 11. Adicionando comando de criação de migration

Adicione o comando de criação de migration (migrate:make).

## 12. Adicionando comando para subir e descer migrations

Adicione os comandos para subir e descer migrations (migrate:up e migrate:down).

## 13. Instalando Express e sua tipagem

Instale o Express e sua tipagem executando os seguintes comandos:

```bash
npm install express
npm install --save-dev @types/express
```

## 14. Configurações para ponto de partida com o framework Express

Configure o ponto de partida com o framework Express.

## 15. Instalando dotenv

Instale o dotenv executando o seguinte comando:

```bash
npm install dotenv
```

## 16. Criando arquivo .env e aplicando dotenv

Crie um arquivo `.env` e aplique o dotenv no `knexfile.js` e no `app.ts`.

## 17. Criando arquivo de conexão com o Knex

Crie um arquivo de conexão com o Knex. Este arquivo será necessário para executar queries.
