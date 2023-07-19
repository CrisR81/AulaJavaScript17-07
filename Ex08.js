/* 8. Faça um programa que receba a idade do usuário, enquanto a
resposta do usuário for menor que 18 anos continue a solicitar a
idade e mostre uma mensagem quando a idade do usuário for
maior que 18. */

let prompt = require("prompt-sync")()

let insiraIdade = parseInt(prompt("Digite sua idade: "))

while (insiraIdade < 18){
        insiraIdade = parseInt(prompt("Digite sua idade: "))
}
   
    console.log("Voce é maior de idade")

  

    



