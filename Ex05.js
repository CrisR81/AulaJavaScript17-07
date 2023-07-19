// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let prompt = require("prompt-sync")()


let anterior = 0
let atual = 1
console.log (anterior) ;
console.log (atual) ;



for(let contador = 0; contador <= 9 ; contador ++){
    let proximo = anterior + atual;
    console.log (proximo) ;
       anterior = atual
       atual = proximo

}