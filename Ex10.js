//     10. Faça um programa que receba um número do usuário e continue
//     a pedir o número se o numero for diferente de 0.
let prompt = require("prompt-sync")()

let digiteNumero;

do {
    digiteNumero = parseFloat(prompt("Digite um número: "))
}
    while(digiteNumero !=0) 