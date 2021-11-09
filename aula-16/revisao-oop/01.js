// cumprimentaPessoa

// const mario = {
//   nome: 'Mario',
//   idade: 30,
//   get maiorDeIdade() {
//     return this.idade >= 18
//   },
//   cumprimentaPessoa() {
//     return "Bom dia ', " + this.nome + ', seja bem-vindo'
//   },
// }

export class Pessoa {
  constructor(nome, idade = 18) {
    this.nome = nome
    this.idade = idade
  }

  get maiorDeIdade() {
    return this.idade >= 18
  }

  cumprimentaPessoa() {
    return `Bom dia, ${this.nome}, seja bem-vindo(a)`
  }
}

const joao = new Pessoa('João')
const maria = new Pessoa('Maria', 25)
const jose = new Pessoa('José', 15)
console.log(joao)
console.log(joao.maiorDeIdade)
console.log(maria)
console.log(maria.maiorDeIdade)
console.log(joao.cumprimentaPessoa())
console.log(maria.cumprimentaPessoa())
console.log(jose)
console.log(jose.maiorDeIdade)
