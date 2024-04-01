# node-config
Configuração de uma API em Nodejs. Typescript, Jest, Knex e Express

OBS: Antes de tudo inicializar o git na máquina e colocar o node_modules no .gitignore

1 - Inicializando o npm
    npm init --y

2 - Instalando o TS como dependência de DEV
    npm install --save-dev typescript

3 - Criando arquivo de configuração do TS
    npx tsc --init

4 - Instalando Jest e sua tipagem como depedência de DEV
    npm install --save-dev jest ts-jest @types/jest

5 - Instalando tipagem do node e ferramenta de monitoração de desenvolvimento, em DEV
     npm install --save-dev @types/node ts-node-dev

6 - Configuração do tsconfig.json e criação da pasta src

7 - Adicionando comando de desenvolvimento (dev) com porta de entrada em app.ts

8 - Configurando o Jest e adicionando comando de testes (test)
    npx ts-jest config:init

9 - Adicionando comando de transpilação (build)

10 - Instalando o query build Knex e o driver do Postgres
    npm install --save knex pg

