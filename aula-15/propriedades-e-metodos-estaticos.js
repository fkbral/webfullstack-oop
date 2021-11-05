// números inteiros .0
// números reais .algo

class Numero {
  static reais = []
  static inteiros = []
  
  constructor(valor) {
    const tipo = Math.floor(valor) === valor ? 'inteiro' : 'real'
    this.tipo = tipo
    this.#separaNumerosEmListas(valor, tipo)
  }

  #separaNumerosEmListas(valor, tipo) {
    const listaParaAcrescentarNumero = 
    tipo === 'inteiro'
    ? Numero.inteiros
    : Numero.reais

    listaParaAcrescentarNumero.push(valor)
  }
}

const numero1 = new Numero(20)
const numero2 = new Numero(2.2)
const numero3 = new Numero(10.4)

console.log(numero1)
console.log(numero2)
console.log(Numero.reais)
console.log(Numero.inteiros)
