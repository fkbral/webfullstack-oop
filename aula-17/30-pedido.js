import { Prato } from './29-pratos-campo-privado.js'

class PratoComQuantidade extends Prato {
  constructor(nome, valor, tipo, estoque, quantidade = 1) {
    super(nome, valor, tipo, estoque)
    this.quantidade = quantidade
  }
}

class Pedido {
  constructor(pratos) {
    this.pratos = pratos
  }

  get total() {
    return this.pratos.reduce(
      (soma, prato) => soma + prato.valor * prato.quantidade,
      0
    )
  }

  get preco() {
    const formatadorDeDinheiro = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'brl',
    })

    return formatadorDeDinheiro.format(this.total)
  }
}

// const somatoria = numeros.reduce((acc, numero) => acc + numero, 0)

// console.log(somatoria)

const pratos = [
  new PratoComQuantidade('ovo pochê', 15, 'vegetariano', 0, 2),
  new PratoComQuantidade('sorvete', 8.5, 'vegetariano'),
]

const pedidoDeJantar = new Pedido(pratos)
console.log(pedidoDeJantar.total)
console.log(pedidoDeJantar.preco)
