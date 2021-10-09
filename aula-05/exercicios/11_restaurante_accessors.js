class Restaurante {
  #tempoDeEntregaEstimado

  constructor(cidade, delivery=false, pedidosPendentes=0) {
    this.cidade = cidade
    this.delivery = delivery
    this.pedidosPendentes = pedidosPendentes
    this.#tempoDeEntregaEstimado = this.#formulaDoTempoDeEntregaEstimado()
  }

  get tempoDeEntregaEstimado() {
    return this.#tempoDeEntregaEstimado
  }

  set tempoDeEntregaEstimado(_) {
    this.#tempoDeEntregaEstimado = this.#formulaDoTempoDeEntregaEstimado()
  }

  #formulaDoTempoDeEntregaEstimado = () => {
    return 10 + 2 * this.pedidosPendentes
  }

  entregaPedido(cidadeDoCliente) {
    if (cidadeDoCliente !== this.cidade) {
      return 'Entrega não pode ser realizada'
    }

    this.pedidosPendentes += 1
    this.tempoDeEntregaEstimado = this.pedidosPendentes

    return `Tempo de entrega estimado: ${this.tempoDeEntregaEstimado} minutos`
  }
}

const churrascaria = new Restaurante("SP", true, 2)

console.log(churrascaria.entregaPedido("SP"))
// console.log(churrascaria.#formulaDoTempoDeEntregaEstimado)

console.log(churrascaria)