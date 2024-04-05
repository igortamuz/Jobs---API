# Jobs-API

API Jobs, teste para Desenvolvedor FullStack.
API tem como função realização do GET da lista completa de vagas disponíveis!

## Sobre:

`Rotas abertas:`

1. GET / --- Realizar GET de toda lista de vagas disponíveis!    

`Principais tecnologias/bibliotecas/frameworks:`

1. Typescript - Para tipagem estática, interfaces e classes. Em outras palavras, para maior segurança e previsibilidade.
2. Node - Um ótimo ambiente de tempo de execução para criar aplicativos do lado do servidor escaláveis e eficientes com JS.
3. PostgreSQL - Um sistema de gerenciamento de banco de dados relacional, oferece segurança para armazenamento e manipulação de dados.
4. Prisma ORM - Interação com bancos de dados SQL simples e segura, oferecendo um conjunto de APIs poderosas para consultas e migrações de dados.


## Como iniciar o desenvolvimento:

1. Clone este repositório.
2. Instale todas as dependências.

```bash
npm i
```

3. Crie e configure o arquivo `.env` usando o `.env.example`.

## Como carregar o dump de desenvolvimento (terminal):

1. No diretório aonde está o `dump` da database `Job`, abra o terminal
2. Digite o seguinte comando:
   
```bash
pg_restore -U seu_username -d Job C:\local_até_o_dump\dump
```

## Como carregar o dump de desenvolvimento (Dbeaver):

1. Abra o Dbeaver
2. Configure uma conexão PostgreSQL
3. Clique com botão direito do mouse em Database > Create New Database.
4. Em `Database name`, digite `Job` e depois clique em `OK`
5. Em `Job`, clique com botão direito do mouse > Tools > Restore
6. Em `Backup File` clique no icone da pasta e vá até diretório aonde está o `dump` da database `Job`, selecione o mesmo (dump.backup) e confirme!
7. Faça as confirmações finais e após a confirmação do restore, apenas fecha o modal e utilize o banco (Contém 97 jobs inseridos para teste) ! 
   

## Executar o prisma:

1. Rode comando de inicizalição do Prisma ORM.

```bash
npx prisma init
```

2. Ler as tabelas do seu banco (definidas em sua .env) e trazer ao Prisma.

```bash
npx prisma db pull
```

3. Gerar um conjunto de classes e funções TypeScript que representam os modelos do banco de dados definidos em um arquivo schema.prisma.

```bash
npx prisma generate
```

## Executar em desenvolvimento:

1. Execute o back-end em um ambiente de desenvolvimento:

```bash
npm run start
```

## Informações do banco:

1. Database name utilizada foi `Job`, definida no `.env`
2. Possui 1 tabela.

`tabela:`

- jobs

## Formato dos envios/retornos:


`GET /`

1. Retorno

```
  [{
    "id": 1,
    "title": "Desenvolvedor Web",
    "description": "Desenvolvimento de aplicações web utilizando React e Node.js",
    "companyName": "Empresa A",
    "cityName": "São Paulo",
    "stateName": "São Paulo - SP",
    "updatedAt": "2023-04-25T08:42:45.033Z",
    "createdAt": "2023-04-25T08:42:45.033Z"
  },
  {
    "id": 2,
    "title": "Analista de Sistemas",
    "description": "Análise e desenvolvimento de sistemas para a área financeira",
    "companyName": "Empresa B",
    "cityName": "Rio de Janeiro",
    "stateName": "Rio de Janeiro - RJ",
    "updatedAt": "2023-04-25T08:42:45.033Z",
    "createdAt": "2023-04-25T08:42:45.033Z"
  }]
```

