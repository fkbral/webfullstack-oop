// Em um restaurante existem quatro tipos de mesas para 2, 4, 6 e 8 pessoas. 
// Faça um gerenciador de filas simples que receba como parâmetro um objeto com as
// informações do grupo de pessoas e encaixe-o na fila correspondente. 
// Por exemplo, um grupo de 3 pessoas seria colocado em um mesa de 4
// pessoas e assim por diante. Se o grupo tiver mais de 8 pessoas, ele não poderá entrar na fila.

// grupo tem como parâmetro um id único e o número de pessoas
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

  printQueue() {
    const valordosElementos = []

    let next = this.firstIn
    while (next) {
      valordosElementos.push(next.value)
      next = next.next
    }

    return valordosElementos
  }
}

const grupo1 = {
  id: '1',
  pessoas: 4,
}

const grupo2 = {
  id: '2',
  pessoas: 2
}

const grupo3 = {
  id: '3',
  pessoas: 10
}

const fila2pessoas = new Queue()
const fila4pessoas = new Queue()
const fila6pessoas = new Queue()
const fila8pessoas = new Queue()
const filasDisponiveis = [fila2pessoas, fila4pessoas, fila6pessoas, fila8pessoas]

function gerenciaFila(grupo) {
  const mapeiaNumeroDePessoasParaFila = {
    '2' : fila2pessoas,
    '4' : fila4pessoas,
    '6' : fila6pessoas,
    '8' : fila8pessoas,
  }

  const maximoDePessoasPorMesas = [2, 4, 6, 8]
  let encontrouMesaIdeal = false
  let mesaIdeal

  // for (maximoDePessoasPorMesa in maximoDePessoasPorMesas) {
  maximoDePessoasPorMesas.forEach(maximoDePessoasPorMesa => {
    if(grupo.pessoas <= maximoDePessoasPorMesa && !encontrouMesaIdeal) {
      encontrouMesaIdeal = true
      mesaIdeal = mapeiaNumeroDePessoasParaFila[`${maximoDePessoasPorMesa}`]
    }
  })

  if(!mesaIdeal) {
    return
  }

  mesaIdeal.push(grupo)
}

gerenciaFila(grupo1)
gerenciaFila(grupo2)
gerenciaFila(grupo3)

console.log(fila2pessoas.printQueue())
console.log(fila4pessoas.printQueue())
console.log(fila6pessoas.printQueue())
console.log(fila8pessoas.printQueue())

