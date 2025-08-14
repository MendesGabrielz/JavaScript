let escolha = prompt("Digite um valor de 1 a 4. Onde 1 seria soma, 2 subtração, 3 multiplação e 4 divisao")

let valor1 = prompt("Digite um numero: ")
valor1 = Number(valor1)

let valor2 = prompt("Digite outro numero: ")
valor2 = Number(valor2)

if (escolha == 1) {

    let soma = valor1 + valor2
    console.log("O resultado é: " + soma)

}

if (escolha == 2) {

    let sub = valor1 - valor2
    console.log("O resultado é: " + sub)
}

if (escolha == 3) {

    let mult = valor1 * valor2
    console.log("O resultado é: " + mult)
}

if (escolha == 4) {

    let div = valor1 / valor2
    console.log("O resultado é: " + div)
    
    if (valor2 == 0) {
        console.log("NAO DA PRA DIVIDIR POR 0, COMEÇA DENOVO")

    }

}
