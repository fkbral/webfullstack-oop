// LIFO (last in, first out)
// class Stack
class Pilha {
  constructor() {
    this.tamanho = 0
    this.topo = null
  }

  //push
  empilha(elemento) {
    this.tamanho += 1
    this.topo = {
      valor: elemento,
      proximo: this.topo
    }
  }

  //pop
  desempilha() {
    if(!this.topo) {
      return
    }

    this.tamanho -= 1
    this.topo = this.topo.proximo
  }

  imprimePilha() {
    const valordosElementos = []

    let proximo = this.topo
    while (proximo) {
      valordosElementos.push(proximo.valor)
      proximo = proximo.proximo
    }

    return valordosElementos
  }
}

const pratos = new Pilha()
console.log(pratos)
pratos.empilha('prato branco')
console.log(pratos.topo)
pratos.empilha('prato marrom')
console.log(pratos.topo)
pratos.empilha('prato amarelo')
console.log(pratos.topo)
// console.log(pratos.topo.proximo.proximo.proximo)

console.log(pratos.imprimePilha())
console.log(pratos.imprimePilha())

pratos.desempilha()
pratos.desempilha()
pratos.desempilha()
pratos.desempilha()
pratos.desempilha()
pratos.desempilha()
console.log(pratos.imprimePilha())