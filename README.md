![GoStack Bootcamp][logo]

### Level 02 - Desafio: Primeiro projeto Node.js

[📑 Instruções do desafio][challenge]

---

### ⚙ Testes

- [x] - `should be able to create a new transaction`: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criada.

- [x] - `should be able to list the transactions`: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- [x] - `should not be able to create outcome transaction without a valid balance`: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`

[logo]: https://github.com/leonardosposina/gostack13-lv01-d01/blob/master/docs/gostack-bootcamp.png?raw=true
[challenge]: https://github.com/rocketseat-education/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs
