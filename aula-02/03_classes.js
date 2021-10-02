
// Antes tínhamos nossa função construtora:
function ConstroiPessoaContructor (nomeDaPessoa, emailDaPessoa, idadeDaPessoa) {
  this.nome = nomeDaPessoa
  this.email = emailDaPessoa
  this.idade = idadeDaPessoa

  this.toString = () => {
    return ("Nome da pessoa: " + this.nome + ", idade da pessoa: " + this.idade)
  }
}

ConstroiPessoaContructor.prototype.cumprimentaPessoa = function() {
  return ("Olá " + this.nome + " do protótipo da função construtora")
}

// Agora com classes:
class ConstroiPessoa {
  constructor(nomeDaPessoa, emailDaPessoa, idadeDaPessoa) {
    this.nome = nomeDaPessoa
    this.email = emailDaPessoa
    this.idade = idadeDaPessoa
    // this.cumprimentaPessoa = function() {
    //   return ("Olá " + this.nome + " do protótipo da função construtora")
    // }
  }

  get dobroDaIdade() {
    return this.idade * 2
  }

  get userName() {
    return this.email.split('@')[0]
  }

  cumprimentaPessoa() {
    return ("Olá " + this.nome)
  }

  toString() {
    return ("Nome da pessoa: " + this.nome + ", idade da pessoa: " + this.idade)
  }
}
// ConstroiPessoa.prototype.cumprimentaPessoa = function() {
//   return ("Olá " + this.nome)
// }
const pessoa1 = new ConstroiPessoa('Fulano', 'fulanodasilva@email.com', 24)
const pessoa2 = new ConstroiPessoa('Ciclano', 'ciclanodasilva@email.com', 22)
console.log(pessoa1)
console.log(pessoa1.cumprimentaPessoa())
console.log(pessoa1.toString())
console.log(pessoa1.userName)

console.log(pessoa2)
console.log(pessoa2.cumprimentaPessoa())
console.log(pessoa2.toString())
console.log(pessoa2.userName)

// pessoa1.cumprimentaPessoa = function() {
//   return ("Olá " + this.nome)
// }

// console.log(pessoa2.cumprimentaPessoa())
// console.log(pessoa1)