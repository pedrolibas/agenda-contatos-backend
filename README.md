## Configuração e Inicialização da Aplicação

### 1. Clone o repositório da aplicação usando o comando abaixo:

- `git clone git@github.com:pedrolibas/agenda-contatos-backend.git`

### 2. Na raiz do projeto, rode o seguinte comando para realizar a intalação de todas as dependências:

- `yarn install`

### 3. Copie o arquivo ".env.example" e cole na raiz do projeto, altere o nome do arquivo para ".env" e, preencha as variáveis de ambiente de acordo com suas informações de conexão do postgreSQL.

### 4. Para rodar as migrations da aplicação use o seguinte comando:

- `yarn typeorm migration:run -d src/data-source.ts`

### 5. Para iniciar a aplicação rode o seguinte comando:

- `yarn dev`

## Tecnologias ultilizadas:

- Typescript
- Express
- NodeJs
- Typeorm
- Bcrypt
- Jsonwebtoken
- Uuid
- PostgreSQL

## API Agenda de contatos

### Introdução

Essa aplicação foi desenvolvida com o propósito de oferecer aos usuários uma forma de gerenciar seus contatos de forma fácil e prática.

### Rotas

#### URL -> http://localhost:3000

### Criação de usuário

#### `POST /users - FORMATO DE REQUISIÇÃO`

```json
{
  "name": "teste",
  "email": "teste@gmail.com",
  "password": "teste@123",
  "telephone": "+55339999999"
}
```

#### `POST /users - FORMATO DE RESPOSTA - STATUS 201`

```json
{
  "id": "981e0532-435f-4510-928e-28ae64ea74c2",
  "name": "teste",
  "email": "teste@gmail.com",
  "telephone": "+55339999999",
  "createdAt": "2023-02-02T04:24:44.497Z"
}
```

### Realizar Login

#### `POST /login - FORMATO DE REQUISIÇÃO`

```json
{
  "email": "teste@gmail.com",
  "password": "teste@123"
}
```

#### `POST /login - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4MWUwNTMyLTQzNWYtNDUxMC05MjhlLTI4YWU2NGVhNzRjMiIsImlhdCI6MTY3NTQ0MDY3NSwiZXhwIjoxNjc1NTI3MDc1fQ.TmU7o9AlO6cLDGHRlN1GBdFgZPI0UZWZ3ORSxlxnfm8"
}
```

### Rotas que precisam de token de autenticação:

### Atualizar usuário

#### `PATCH /users - FORMATO DE REQUISIÇÂO`

```json
{
  "name": "Nome atualizado"
}
```

#### `PATCH /users - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "id": "981e0532-435f-4510-928e-28ae64ea74c2",
  "name": "Nome atualizado",
  "email": "teste@gmail.com",
  "telephone": "+55339999999",
  "createdAt": "2023-02-02T04:24:44.497Z"
}
```

### Deleção de usuário

#### `DELETE /users - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

#### `DELETE /users - FORMATO DE RESPOSTA - STATUS 204`

```json
Vazio
```

### Dados de um usuário

#### `GET /users - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

#### `GET /users - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "id": "981e0532-435f-4510-928e-28ae64ea74c2",
  "name": "teste",
  "email": "teste@gmail.com",
  "telephone": "+55339999999",
  "createdAt": "2023-02-02T04:24:44.497Z",
  "contacts": [
    {
      "id": "03e29ae4-85e6-4e2f-bf46-3b6c2509bfa4",
      "name": "teste2",
      "email": "teste2@gmail.com",
      "telephone": "+5533102842",
      "createdAt": "2023-02-02T05:25:25.591Z"
    },
    {
      "id": "5d0a608c-ac98-4408-a866-040e22fbaa82",
      "name": "teste3",
      "email": "teste3@gmail.com",
      "telephone": "+5533102842",
      "createdAt": "2023-02-02T05:34:51.389Z"
    }
  ]
}
```

### Criação de contato

#### `POST /contact - FORMATO DE REQUISIÇÃO`

```json
{
  "name": "teste2",
  "email": "teste2@gmail.com",
  "telephone": "+5533102842"
}
```

#### `POST /contact - FORMATO DE RESPOSTA - STATUS 201`

```json
{
  "id": "5d0a608c-ac98-4408-a866-040e22fbaa82",
  "name": "teste2",
  "email": "teste2@gmail.com",
  "telephone": "+5533102842",
  "user": {
    "id": "981e0532-435f-4510-928e-28ae64ea74c2",
    "name": "teste",
    "email": "teste@gmail.com",
    "telephone": "+55339999999",
    "createdAt": "2023-02-02T04:24:44.497Z"
  },
  "createdAt": "2023-02-02T05:34:51.389Z"
}
```

### Atualização de contato

#### `PATCH /contact/:id - FORMATO DE REQUISIÇÃO`

```json
{
  "email": "email@alterado.com"
}
```

#### `PATCH /contact/:id - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "id": "5d0a608c-ac98-4408-a866-040e22fbaa82",
  "name": "teste2",
  "email": "email@alterado.com",
  "telephone": "+5533102842",
  "user": {
    "id": "981e0532-435f-4510-928e-28ae64ea74c2",
    "name": "teste",
    "email": "teste@gmail.com",
    "telephone": "+55339999999",
    "createdAt": "2023-02-02T04:24:44.497Z"
  },
  "createdAt": "2023-02-02T05:34:51.389Z"
}
```

### Deleção de contato

#### `DELETE /contact/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

#### `DELETE /contact/:id - FORMATO DE RESPOSTA - STATUS 204`

```json
Vazio
```

### Listagem de um contato

#### `GET /contact/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

#### `GET /contact/:id - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "id": "5d0a608c-ac98-4408-a866-040e22fbaa82",
  "name": "teste2",
  "email": "email@alterado.com",
  "telephone": "+5533102842",
  "user": {
    "id": "981e0532-435f-4510-928e-28ae64ea74c2",
    "name": "teste",
    "email": "teste@gmail.com",
    "telephone": "+55339999999",
    "createdAt": "2023-02-02T04:24:44.497Z"
  },
  "createdAt": "2023-02-02T05:34:51.389Z"
}
```
teste se