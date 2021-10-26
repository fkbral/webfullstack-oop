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

    // popGenerico(this)
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

// - podemos empilhar no máximo 4 bolas de sorvete
// - não podemos empilhar duas bolas em seguida de mesmo sabor

function MixinCasquinha(classe) {
  return class extends classe {
    push(elemento) {
      if(this.length >= 4) {
        return
      }
  
      if (this.top && this.top.valor === elemento) {
        return
      }

      super.push(elemento)
      // podemos chamar o super.push(elemento) para não escrever todo o código
      // que tinha no construtor original
  
      // this.length += 1
      // this.top = {
      //   valor: elemento,
      //   next: this.top
      // }
    }
  }
}

class CasquinhaDeSorvete extends MixinCasquinha(Stack) {}

// class CasquinhaDeSorvete extends Stack {
//   push(elemento) {
//     if(this.length >= 4) {
//       return
//     }

//     if (this.top && this.top.valor === elemento) {
//       return
//     }

//     this.length += 1
//     this.top = {
//       valor: elemento,
//       next: this.top
//     }
//   }
// }

const casquinhaDeChocolate = new CasquinhaDeSorvete()
casquinhaDeChocolate.push('chocolate amargo')
casquinhaDeChocolate.push('chocolate amargo')
casquinhaDeChocolate.push('banana')
casquinhaDeChocolate.push('abacaxi')
casquinhaDeChocolate.push('abacaxi')
casquinhaDeChocolate.push('framboesa')

casquinhaDeChocolate.pop()

casquinhaDeChocolate.push('menta')
console.log(casquinhaDeChocolate.printStack())