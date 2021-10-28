class Queue {
  constructor() {
    this.length = 0
    this.firstIn = null
  }

  #getLastElement(element) {
    if (!element.next){
      return element
    }
    return this.#getLastElement(element.next)
  }

  push(element) {
    this.length += 1

    if(!this.firstIn) {
      this.firstIn = {
        value: element,
        next: null
      }
      return
    } 

    const lastIn = this.#getLastElement(this.firstIn)
    lastIn.next = {
      value: element,
      next: null
    }
  }

  pop() {
    if(!this.firstIn) {
      return
    }

    this.length -= 1
    this.firstIn = this.firstIn.next
  }

  printStack() {
    const valordosElementos = []

    let next = this.firstIn
    while (next) {
      valordosElementos.push(next.value)
      next = next.next
    }

    return valordosElementos
  }
}

const filaTeste = new Queue()

filaTeste.push('primeiro')
console.log(filaTeste.firstIn)
filaTeste.push('segundo')
// console.log(filaTeste.firstIn)
filaTeste.push('terceiro')
// console.log(filaTeste.firstIn)
filaTeste.push('quarto')
// console.log(filaTeste.firstIn)
console.log(filaTeste.printStack())
filaTeste.pop()
filaTeste.pop()
console.log(filaTeste.printStack())

// filaTeste = ['primeiro', 'segundo', 'terceiro', 'quarto']
// quando eu retirar elementos um a um de nossa fila o seguinte acontece:
// ['segundo', 'terceiro', 'quarto']
// ['terceiro', 'quarto']
// ['quarto']
// []