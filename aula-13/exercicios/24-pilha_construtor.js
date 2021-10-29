// Crie uma pilha que seja capaz de receber um parâmetro tamanhoInicial 
// no seu construtor e que monte uma pilha da seguinte forma:
// exemplo:

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

class PilhaCustomizada extends Stack {
  constructor(numero) {
    super()
    this.montaPilha(numero + 1)
  }

  montaPilha(tamanho) {
    let numeroAtual = 1
    while (numeroAtual < tamanho) {
      this.push(numeroAtual)
      numeroAtual += 1
    }
  }
}

const minhaPilha = new PilhaCustomizada(4)
minhaPilha.pop()
console.log(minhaPilha.printStack())
// cria pilha com os elementos [4, 3, 2, 1]
// note que neste caso 4 é o topo e 1 é o primeiro elemento empilhado