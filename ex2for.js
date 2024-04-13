
const readlineSync = require('readline-sync');
let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number (readlineSync.question('Escolha um numero: '))
}

function media(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; ++i) {
        soma += numeros[i]
    } 
    return soma / numeros.length;
}

console.log('a media é :', media(numeros));