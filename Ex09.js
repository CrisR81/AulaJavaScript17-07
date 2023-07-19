/* 9. Faça um programa que receba um número do usuário e mostre
no console a contagem regressiva até 0. */

let prompt = require("prompt-sync")()


let insiraNumero = parseFloat(prompt("Digitre um número: "))

while (insiraNumero >= 0) {

    console.log(insiraNumero)

    insiraNumero --

}

