class Pessoa {
  constructor(nome, peso) {
    this.nome = nome
    this.peso = peso
  }
}

class Animal {
  constructor(especie, peso) {
    const montarias = ["cavalo", "burro", "pônei", "camelo", "dromedário"]

    this.especie = especie.toLowerCase()
    this.peso = peso
    this.ehMontaria = montarias.includes(especie.toLowerCase())
  }

  pessoaMonta(pessoa) {
    console.log(
      this.peso > pessoa.peso * 1.5
      ? 'pessoa consegue montar neste animal'
      : 'pessoa não consegue montar no animal' 
    )
  }
}

const cavalo = new Animal('CAVALO', 140)
const Joao = new Pessoa('João', 75)

cavalo.pessoaMonta(Joao)
console.log(cavalo)
