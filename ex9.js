const pessoa = {
    nome: 'lorimar',
    idade : 42,
    
    }

function criarNovoObjeto (objeto) {
    const novaPessoa = {
     ... objeto ,
     comidaPreferida : ['pastel', 'lazanha','pizza'],
        melhorAmigo: {
        idade: 24,
        nome :'camila',

        }
    }
    console.log(`O nome da pessoa ${novaPessoa.nome} e sua comida preferida sao ${novaPessoa.comidaPreferida[0]}, ${novaPessoa.comidaPreferida[1]} e ${novaPessoa.comidaPreferida[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}
criarNovoObjeto (pessoa)