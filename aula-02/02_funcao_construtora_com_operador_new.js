// jeito mais "verboso"/longo de criar um objeto através de uma função construtora
function constroiPessoaLongo (nomeDaPessoa, emailDaPessoa, idadeDaPessoa) {
  return {
    nome:nomeDaPessoa,
    email: emailDaPessoa,
    idade: idadeDaPessoa,
    get dobroDaIdade() {
      return this.idade * 2
    },
    get userName() {
      return this.email.split('@')[0]
    },
    cumprimentaPessoa() {
      return ("Olá " + this.nome)
    }
  }
}

function ConstroiPessoa (nomeDaPessoa, emailDaPessoa, idadeDaPessoa) {
  this.nome = nomeDaPessoa
  this.email = emailDaPessoa
  this.idade = idadeDaPessoa

  // this.cumprimentaPessoa = () => {
  //   return ("Olá " + this.nome + " do próprio objeto")
  // }

  // estou reescrevendo o método toString que seria encontrado no protótipo de objetos
  this.toString = () => {
    return ("Nome da pessoa: " + this.nome + ", idade da pessoa: " + this.idade)
  }
}

ConstroiPessoa.prototype.cumprimentaPessoa = function() {
  return ("Olá " + this.nome + " do protótipo da função construtora")
}

// Quando uso o operador new na frente da função construtora, ele me retorna o this dela
// Por debaixo dos panos, o JavaScript estaria fazendo isso:
// function constroiPessoa (nomeDaPessoa, emailDaPessoa, idadeDaPessoa) {
//   const objeto = {}
//   objeto.nome = nomeDaPessoa

//   return objeto
// }

const pessoa4 = new ConstroiPessoa('Fulano', 'fulanodasilva@email.com', 24)
const pessoa5 = new ConstroiPessoa('Ciclano', 'ciclanodasilva@email.com', 26)

const tv = {
  ligada: true,
  volume: 25,
}

// console.log(tv)
// console.log(pessoa4.toString())
console.log(pessoa4)
console.log(pessoa5)
console.log(pessoa5.cumprimentaPessoa())

// console.log(['bia', 'carlos'].toString())

// console.log('123'.toString())

// console.log({})