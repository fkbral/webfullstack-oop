// Faça uma classe Mes que receba como parâmetro um número de 0 a 11
// e grave em uma propriedade nome, o nome correspondente do mês.

class Mes {
  #dadosDosMeses = [
    { nome: 'Janeiro', numeroDeDias: 31 },
    { nome: 'Fevereiro', numeroDeDias: 28 },
    { nome: 'Março', numeroDeDias: 30 },
    { nome: 'Abril', numeroDeDias: 31 },
    { nome: 'Maio', numeroDeDias: 30 },
    { nome: 'Junho', numeroDeDias: 30 },
    { nome: 'Julho', numeroDeDias: 30 },
    { nome: 'Agosto', numeroDeDias: 30 },
    { nome: 'Setembro', numeroDeDias: 30 },
    { nome: 'Outubro', numeroDeDias: 30 },
    { nome: 'Novembro', numeroDeDias: 30 },
    { nome: 'Dezembro', numeroDeDias: 31 },
  ]
  constructor(numeroDoMes) {
    this.numeroDoMes = numeroDoMes
    this.#vinculaDadosDoMes()
  }

  #vinculaDadosDoMes() {
    const mes = this.#dadosDosMeses[this.numeroDoMes]

    if(!mes){
      return
    }

    this.nome = mes.nome
    this.numeroDeDias = mes.numeroDeDias
  }
}

const mes1 = new Mes(3)
console.log(mes1)
console.log(mes1.nome)
console.log(mes1.numeroDeDias)
