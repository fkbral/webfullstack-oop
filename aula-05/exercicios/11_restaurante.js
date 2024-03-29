// Crie uma classe Restaurante com as propriedades cidade, 
// delivery (verdadeiro ou falso), pedidosPendentes e tempo de entrega estimado
// (calculado com base nos pedidos pendentes, sendo 10 + 2 * pedidosPendentes 
// em minutos). Os restaurantes devem ser capazes de realizar entregas desde que o 
// cliente esteja localizado na mesma cidade e, para isso, precisamos 
// de um método entregaPedido que devolve como resultado se é possível
// realizar a entrega para um determinado cliente ou não e, em caso positivo,
// o tempo estimado de entrega.
class Restaurante {
  constructor(cidade, delivery=false, pedidosPendentes=0) {
    this.cidade = cidade
    this.delivery = delivery
    this.pedidosPendentes = pedidosPendentes
    this.tempoDeEntregaEstimado = 10 + 2 * this.pedidosPendentes
  }

  entregaPedido(cidadeDoCliente) {
    if (cidadeDoCliente !== this.cidade) {
      return 'Entrega não pode ser realizada'
    }

    this.pedidosPendentes += 1
    this.tempoDeEntregaEstimado = 10 + 2 * this.pedidosPendentes

    return `Tempo de entrega estimado: ${this.tempoDeEntregaEstimado} minutos`
  }
}

const churrascaria = new Restaurante("SP", true, 2)

console.log(churrascaria.entregaPedido("SP"))

console.log(churrascaria)