/*1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.*/

let message = "Hello World!"

alert(message)

/*2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
 */

let numberOne = 5
let numberTwo = 10

const sum = numberOne + numberTwo
alert(`O resultado da soma é: ${sum}`)

/*3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/

let isNumber = 5

if (typeof isNumber === "number") {
  alert("É um número")
} else {
  alert("Não é um número")
}

/*4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/

let isString = "Brazil"

if (typeof isString === "string") {
  alert("É uma String")
} else {
  alert("Não é uma String")
}

/*5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/

let isBoolean = false

if (typeof isBoolean === "boolean") {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}

/*6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/

let numberThree = 5
let numberFour = 15

const sub = numberThree - numberFour
alert(`O resultado da subtração é: ${sub}`)

/*7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.*/

let numberFive = 5
let numberSix = 20

const multi = numberFive * numberSix
alert(`O resultado da multiplicação é: ${multi}`)

/*8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.*/

let numberSeven = 5
let numberEight = 20

const div = numberSeven / numberEight
alert(`O resultado da divisão é: ${div}`)

/*9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".*/

let pairOne = 5
let pairTwo = 10

if ((pairOne + pairTwo) % 2 == 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

/*10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
 */

const isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}
