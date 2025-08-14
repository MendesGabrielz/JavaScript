let valor1 = prompt("Digite a sua primeira nota: ")
valor1 = Number(valor1)

let peso1 = prompt("Digite o peso da prova: ")
peso1 = Number(peso1)

let valor2 = prompt("Digite a sua segunda nota: ")
valor2 = Number(valor2)

let peso2 = prompt("Digite o peso da prova: ")
peso2 = Number(peso2)

let valor3 = prompt("Digite a sua terceira nota: ")
valor3 = Number(valor3)

let peso3 = prompt("Digite o peso da prova: ")
peso3 = Number(peso3)

let pesot = peso1 + peso2 + peso3
let media = (valor1 * peso1) + (valor2 * peso2) + (valor3 * peso3) / pesot

console.log("A media é: " + media)