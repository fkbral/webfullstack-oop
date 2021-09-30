const pessoa = {
  nome: 'Tiago',
  email: 'tiagoLM@outlook.com',
  idade: 20,
  // sintaxe longa
  // calculaDobroDaIdade: function(){
  //   return this.idade * 2
  // },
  // sintaxe curta
  calculaDobroDaIdade() {
    return this.idade * 2
  },
  cumprimentaPessoa() {
    return ("Olá " + this.nome)
  },
}

// const mensagem = pessoa.cumprimentaPessoa()
const mensagem = pessoa.cumprimentaPessoa()

// console.log(pessoa.idade)
console.log(pessoa.calculaDobroDaIdade())
// window.console.log(mensagem)
// console.log(mensagem)
