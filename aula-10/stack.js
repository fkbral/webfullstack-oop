class Stack {
  constructor() {
    this.length = 0
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

class PilhaCustomizada extends Stack {}

class Dish {
  constructor(color) {
    this.color = color
  }
}

const dishes = new Stack()
console.log(dishes)
dishes.push(new Dish('white'))
console.log(dishes.top)
dishes.push(new Dish('brown'))
console.log(dishes.top)
dishes.push(new Dish('yellow'))
console.log(dishes.top)

console.log(dishes.printStack())
console.log(dishes.printStack())

dishes.pop()
dishes.pop()
// dishes.pop()
// dishes.pop()
// dishes.pop()
// dishes.pop()

console.log(dishes.printStack())