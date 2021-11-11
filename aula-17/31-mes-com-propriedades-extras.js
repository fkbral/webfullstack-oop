// Faça uma classe Mes que receba como parâmetro um número de 0 a 11
// e grave em uma propriedade nome, o nome correspondente do mês.

class Mes {
  #nomesDosMeses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  constructor(numeroDoMes) {
    this.numeroDoMes = numeroDoMes
    this.#vinculaDadosDoMes()
  }

  #vinculaDadosDoMes() {
    this.nome = 'tal'
    this.numeroDeDias = 30
  }
}

const mes1 = new Mes(3)
console.log(mes1)
console.log(mes1.nome)
