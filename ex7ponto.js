const usuario = {
nome : 'prof',
idade : 25,
imail : 'prof@senac.com.br',
cidade : 'sao leopoldo'
}


const novoUsuario = {
...usuario,
nome : 'joao',
idade : 28
}
console.log(novoUsuario)