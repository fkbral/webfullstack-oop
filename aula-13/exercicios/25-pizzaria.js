// Para otimizar as entregas de pizza de um determinado delivery,
// crie uma estrutura de pilha que garanta que no máximo 8 pizzas podem 
// ser empilhadas para entrega e que estas sejam ordenadas de acordo com 
// a entrada de pedidos. 
// Exemplo:

class Stack {
  constructor() {
    this.length = 0
    // poderiamos chamar nosso topo de lastIn no caso de pilhas
    this.top = null
  }

  push(elemento) {
    this.length += 1
    this.top = {
      valor: elemento,
      next: this.top
    }
  }

  pop() {
    if(!this.top) {
      return
    }

    this.length -= 1
    this.top = this.top.next
  }

  printStack() {
    const valordosElementos = []

    let next = this.top
    while (next) {
      valordosElementos.push(next.valor)
      next = next.next
    }

    return valordosElementos
  }
}

class Pedido {
  constructor(produtos) {
    this.produtos = produtos
  }
} 

class PilhaDeEntrega extends Stack {
	constructor(pedidos) {
    super()
    this.empilhaPizzas(pedidos)
	}

  push(element) {
    if (this.length === 8) {
      return
    }

    super.push(element)
  }

  empilhaPizzas(pedidos) {
    const pedidosEmOrderReversa = pedidos.reverse()

    // se quiser tirar o pedido inteiro de uma vez
    // pedidosEmOrderReversa.forEach((pedido) => {
    //   this.push(pedido.produtos)
    // })

    // se quiser tirar pizza a pizza de nossa fila
    pedidosEmOrderReversa.forEach((pedido) => {
      pedido.produtos.forEach(produto => this.push(produto))
    })
  }
}

const pedidos = [
  new Pedido(['calabresa', 'marguerita']),
  new Pedido(['mussarela']),
  new Pedido(['quatro queijos'])
]

console.log(pedidos)

console.log(pedidos.map(pedido => pedido.produtos))

const entregaDoEntregador1 = new PilhaDeEntrega(pedidos)

console.log(entregaDoEntregador1.printStack())
entregaDoEntregador1.pop()
console.log(entregaDoEntregador1.printStack())