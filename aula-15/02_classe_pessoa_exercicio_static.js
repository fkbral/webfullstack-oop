// 1 - Faça uma classe pessoa com uma propriedade estática total que conte 
// quantos objetos do tipo pessoa foram criados.

// 2 - Agora separe as pessoas criadas em dois grupos (propriedades estáticas):
// maioresDeIdade e menoresDeIdade (menores de 18 anos)

class Pessoa {
  static total = 0
  static maioresDeIdade = []
  static menoresDeIdade = []

  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.#categorizaPessoaEmGrupo()
    Pessoa.total += 1
  }

  #categorizaPessoaEmGrupo() {
    const grupo = this.idade >= 18 ? Pessoa.maioresDeIdade : Pessoa.menoresDeIdade

    grupo.push(this.nome)

    // console.log(this.idade > 18 ? 'maior de idade' : 'menor de idade')

    // alternativa 2
    // this.idade >= 18 
    // ? Pessoa.maioresDeIdade.push(this.nome) 
    // : Pessoa.menoresDeIdade.push(this.nome)

    // alternativa 3
    // if (this.idade >= 18) {
    //   Pessoa.maioresDeIdade.push(this.nome)
    //   return
    // }
    // Pessoa.menoresDeIdade.push(this.nome)
  }
}

const bia = new Pessoa('Bia', 22)
const joao = new Pessoa('João', 15)
const jose = new Pessoa('José', 25)

console.log(bia)
console.log(Pessoa.total)
console.log(Pessoa.maioresDeIdade)
console.log(Pessoa.menoresDeIdade)