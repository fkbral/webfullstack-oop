class Animal {
  constructor(especie) {
    this.especie = especie
  }
}

class Pessoa extends Animal {
  constructor(nome, idade, especie="homo sapiens sapiens"){
    super(especie)
    this.nome = nome;
    this.idade = idade;
  }

  imprimeDados(saudacao) {
    return `${saudacao}, ${this.nome} tem ${this.idade} anos`
  }
}

class Cidadao extends Pessoa {
  constructor(nome, idade, cpf, rg){
    super(nome, idade)
    // o método super executa o constructor da classe Pai
    // o método super está fazendo exatamente o que essas linhas de baixo fariam
    // this.nome = nome;
    // this.idade = idade;
    this.cpf = cpf;
    this.rg = rg;
  }
}

// Professor - NPS 0 a 100, numeroDeMateriasDadas 0 a n, daFalta(aluno)

// Aluno - mediaDaMateriaAtual, numeroDeFaltas

const joao = new Pessoa('João', 22)
console.log(joao.imprimeDados('Bom dia'))
console.log(joao)

const carlosCidadao = new Cidadao('Carlos', 24, '123.457.789-01', '21451255-1')

console.log(carlosCidadao)
console.log(carlosCidadao.imprimeDados('Boa noite'))