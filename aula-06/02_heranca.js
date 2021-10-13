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
  constructor(nome, idade, cpf, rg) {
    super(nome, idade)
    this.cpf = cpf;
    this.rg = rg;
  }
}

class Aluno extends Cidadao {
  constructor(nome, idade, cpf, rg, mediaDaMateriaAtual, numeroDeFaltas) {
    super(nome, idade, cpf, rg)
    this.mediaDaMateriaAtual = mediaDaMateriaAtual
    this.numeroDeFaltas = numeroDeFaltas
  }
}

class Professor extends Cidadao {
  constructor(nome, idade, cpf, rg, nps, numeroDeMateriasDadas) {
    super(nome, idade, cpf, rg)
    this.nps = nps
    this.numeroDeMateriasDadas = numeroDeMateriasDadas
  }

  daFalta(aluno, numeroDeFaltas=1) {
    aluno.numeroDeFaltas += numeroDeFaltas
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

const fulanoAluno = new Aluno('Fulano', 27, '123.457.789-01', '21451255-1', 8.5, 2)

const felipeProfessor = new Professor('Felipe', 23, '123.457.789-01', '21451255-1', 80, 6)

console.log(fulanoAluno)
console.log(felipeProfessor)

console.log(fulanoAluno.numeroDeFaltas)
felipeProfessor.daFalta(fulanoAluno, 2)
console.log(fulanoAluno.numeroDeFaltas)