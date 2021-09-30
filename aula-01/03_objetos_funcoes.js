const nome = 'Tiago'

const pessoa = {
  // sintaxe longa para propriedade
  // nome: nome,
  nome,
  email: 'tiagoLM@outlook.com',
  idade: 20,
  // sintaxe longa para método
  // cumprimentaPessoa: function() {
  //   return("Olá " + nomeDaPessoa)
  // }
  cumprimentaPessoa(nomeDaPessoa = "Fulano") {
    return ("Olá " + nomeDaPessoa)
  },
}

// const mensagem = pessoa.cumprimentaPessoa()
const mensagem = pessoa.cumprimentaPessoa("Jonas")
console.log(mensagem)
