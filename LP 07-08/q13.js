let km = prompt("Digite quantos km foram viajados: ")
km = Number(km)

let velocidadem = prompt("Digite a quantos km/h foi viajado: ")
velocidadem = Number(velocidadem)

let litro = prompt("Qual o valor do preço do combustivel por litro ?")
litro = Number(litro)

let consumo = prompt("Qual o consumo do carro ? (km por litros)")
consumo = Number(consumo)

tempo = km / velocidadem

consumido = km / consumo

custo = consumido * litro

console.log("O tempo de viagem em horas é de: " + tempo)
console.log("A quantidade de litros consumidos foi de: " + consumido)
console.log("O custo estimado da viagem foi de: " + custo)
