let valor = prompt("Digite o valor da compra: ")
valor = Number(valor)

let desconto = (valor * 5) / 100
let descontof = valor - desconto

console.log("O valor final do produto é: " + descontof)