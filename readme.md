# API - Clinica SuperAÇÃO

Projeto desenvolvido para o desafio da Afya Labs.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 🔧 Instalação

Primeiros passos:

```
Crie um banco de dados PostgreSQL.
```
No terminal, clone o projeto:
```
git clone https://github.com/gucostarp/clinicaApi.git
```

Edite o arquivo "env_pattern" com as informações do banco de dados, conforme abaixo:

```
Formato padrão do DATABASE_URL: postgres://username:password@host:porta/nome_do_banco
```

```
DATABASE_URL=U URL da do seu banco de dados (vide formato padrão acima)

ENVIRONMENT=DEV

##################

SECRET=Sua chave para criptografia
EXPIRE=3600000

```

Salve esse arquivo com o name .env.


Entre na pasta do projeto:
```
cd clinicaApi
```

Instale as dependências:
```
yarn install
```

Gere as migrations:
```
npx typeorm migration:generate -n tables -o
```

Rode as migrations:
```
npx typeorm migration:run
```

Execute a aplicação:
```
yarn dev
```
Pronto, agora é possível acessar a aplicação a partir da rota http://localhost:3000/ ou, se desejar, acesse o deploy pelo link https://clinicaapi.herokuapp.com.


## 🛠️ Construído com

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [Express Validator](https://express-validator.github.io/)
- [TypeORM](https://typeorm.io/#/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [SuperTest](https://www.npmjs.com/package/supertest)

## ✒️ Autores

Grupo 3 - Turma 2

* **Gustavo Costa** - [gucostarp](https://github.com/gucostarp)
* **Lohany Formiga** - [lohanyformiga](https://github.com/lohanyformiga)
* **Leonardo Gomes** - [LeoGomes0919 ](https://github.com/LeoGomes0919 )


## 📄 Licença

Este projeto está sob a licença da Clinica SuperAÇÃO.

## 🎁 Agradecimentos

* Agradecemos, primeiramente, a oportunidade da Afya, junto com a Gama Academy, de nos proporcionar tanto conhecimento, através de seu programa Afya Labs. 📢
* Agradecemos, também, a nossos professores, Douglas Morais e Danilo Aparecido, responsáveis por chegarmos até aqui. 
* E, não menos importante, aos nossos mentores Léo Berdu, Luis Junior e Guilherme Almeida, por acreditar em nosso grupo 🤓.

---
