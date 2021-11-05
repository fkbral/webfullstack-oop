// Faça um programa para organizar pessoas em duas filas, uma comum e outra prioritária.
// Leve em consideração as seguintes regras para entrada na fila prioritária:
// - Pessoas com 60 anos ou mais
// - Gestantes
// - Pessoas com deficiências
// Para fazer a conferência, passe para a fila um objeto da classe Pessoa
// que pode ter as propriedades: idade (number), portadorDeDeficiencia (boolean) e gestante (boolean)

import { Queue as Fila } from '../../aula-12/02_queue.js'

class Pessoa {
  constructor(idade, gestante=false, portadorDeDeficiencia=false) {
    this.idade = idade
    this.portadorDeDeficiencia = portadorDeDeficiencia
    this.gestante = gestante
  }
}

const pessoas = [new Pessoa(50), new Pessoa(23, true)]

class GerenciadorDeFilas {
  static filaPrioritaria = new Fila()
  static filaComum = new Fila()

  // get filaComum() {
  //   return GerenciadorDeFilas.filaComum
  // }

  static adicionaPessoaNaFila(pessoa) {
    if (pessoa.idade >= 60 || pessoa.portadorDeDeficiencia || pessoa.gestante) {
      this.filaPrioritaria.push(pessoa)

      return
    }

    this.filaComum.push(pessoa)
  }

  static adicionaPessoasNaFila(pessoas) {
    pessoas.forEach(pessoa => this.adicionaPessoaNaFila(pessoa))
  }
}

console.log(GerenciadorDeFilas.filaComum)
// console.log(instanciaGerenciadorDeFilas.filaComum)
// const instanciaGerenciadorDeFilas = new GerenciadorDeFilas()



GerenciadorDeFilas.adicionaPessoasNaFila(pessoas)

console.log({filaComum: GerenciadorDeFilas.filaComum.printQueue()})
console.log({filaPrioritaria: GerenciadorDeFilas.filaPrioritaria.printQueue()})
