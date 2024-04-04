const readlineSync = require('readline-sync');
const cachorros = ['pincher','vira lata','buldog','policial','pastor alemao']
const escolha = readlineSync.question("escolha um numero de o a 4 ")
console.log(cachorros[escolha])