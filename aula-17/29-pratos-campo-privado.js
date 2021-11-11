// Queremos montar uma classe Prato com as seguintes propriedades: nome (string),
// valor (number), estoque (number) e tipo (string: sem restrições, vegetariano, vegano).

// não precisamos fazer toda esta resolução, mas já aproveitamos para revisar outros conceitos
export class Prato {
  #tipoPermitidos = ['sem restrições', 'vegetariano', 'vegano']
  #tipo

  constructor(nome, valor=1, tipo = 'sem restrições', estoque = 0) {
    this.nome = nome
    this.valor = valor
    this.estoque = estoque
    this.#tipo = this.#validaTipo(tipo)
  }

  get tipo() {
    return this.#tipo
  }

  set tipo(tipo) {
    this.#tipo = this.#validaTipo(tipo)
  }

  get fraseTipo() {
    return `o prato é ${this.#tipo}`
  }

  #validaTipo(tipo) {
    const tipoParaIncluir = this.#tipo ? this.#tipo : 'sem restrições'

    return this.#tipoPermitidos.includes(tipo) ? tipo : tipoParaIncluir
  }
}

const beterraba = new Prato('beterraba assada', 25, 'vegano')
const ovo = new Prato('ovo pochê', 15, 'vegetariano')
ovo.tipo = 'vegano asfasfsaf'
// ovo.fraseTipo ="o prato é sem restrições"

// console.log(beterraba)
// console.log(ovo)
// console.log(beterraba.tipo)
// console.log(ovo.tipo)
// console.log(ovo.fraseTipo)
