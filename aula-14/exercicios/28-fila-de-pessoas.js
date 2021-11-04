// Faça um programa para organizar pessoas em duas filas, uma comum e outra prioritária.
// Leve em consideração as seguintes regras para entrada na fila prioritária:
// - Pessoas com 60 anos ou mais
// - Gestantes
// - Pessoas com deficiências
// Para fazer a conferência, passe para a fila um objeto da classe Pessoa
// que pode ter as propriedades: idade (number), portadorDeDeficiencia (boolean) e gestante (boolean)

import { Queue } from '../../aula-12/02_queue.js'
// const pessoas = [
//   {
//     idade: 50,
//   },
//   {
//     idade: 23,
//     gestante: true,
//   },
// ]

class Pessoa {
  constructor(idade, gestante=false, portadorDeDeficiencia=false) {
    this.idade = idade
    this.portadorDeDeficiencia = portadorDeDeficiencia
    this.gestante = gestante
  }
}

const pessoas = [ new Pessoa(50), new Pessoa(23, true)]

class GerenciadorDeFilas {
  constructor() {
    this.filaComum = new Queue()
    this.filaPrioritaria = new Queue()
  }

  adicionaPessoaNaFila(pessoa) {
    if (pessoa.idade >= 60 || pessoa.portadorDeDeficiencia || pessoa.gestante) {
      this.filaPrioritaria.push(pessoa)

      return
    }

    this.filaComum.push(pessoa)
  }

  adicionaPessoasNaFila(pessoas) {
    pessoas.forEach(pessoa => this.adicionaPessoaNaFila(pessoa))
  }
}

// console.log(GerenciadorDeFilas.toString())
const gerenciadorDeFilas = new GerenciadorDeFilas()
// console.log(GerenciadorDeFilas.toString())

gerenciadorDeFilas.adicionaPessoasNaFila(pessoas)

console.log({filaComum: gerenciadorDeFilas.filaComum.printQueue()})
console.log({filaPrioritaria: gerenciadorDeFilas.filaPrioritaria.printQueue()})
