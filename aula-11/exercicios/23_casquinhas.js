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

class CasquinhaDeSorvete extends Stack {
  #mapeamentoTamanhoSorvete = {
    'pequena' : {tamanhoMinimo: 1, tamanhoMaximo: 2, precoBase: 2.5, precoAdicional: 2.5},
    'média' : {tamanhoMinimo: 2, tamanhoMaximo: 3, precoBase: 6, precoAdicional: 2},
    'grande' : {tamanhoMinimo: 2, tamanhoMaximo: 4, precoBase: 7.5, precoAdicional: 1},
  }

  constructor(tamanhoDaCasquinha) {
    super()
    this.tamanhoDaCasquinha = tamanhoDaCasquinha
  }

  push(elemento) {
    // if (this.tamanhoDaCasquinha === 'pequena' && this.length >= 2) {
    //   return
    // }

    // em vez disso podemos pegar o valor esperado para cada tamanho de casquinha
    // e armazenar em uma variável
    const maximoDeBolas = 
    this.#mapeamentoTamanhoSorvete[this.tamanhoDaCasquinha].tamanhoMaximo

    if (!maximoDeBolas) {
      return
    }

    if (this.length >= maximoDeBolas) {
      return
    }

    if (this.top && this.top.valor === elemento) {
      return
    } 

    super.push(elemento)
  }

  // - Casquinha pequena de 1 bola: R$ 2,50 (+ R$ 2,50 por mais uma bola)
  // - Casquinha média de 2 bolas: R$ 6,00 (+ R$ 2,00 por mais uma bola)
  // - Casquinha grande de 2 bolas: R$ 7,50 (+ R$ 1,00 por bola adicional)
  retornaPreco() {
    const dadosDoTipoDeSorvete = this.#mapeamentoTamanhoSorvete[this.tamanhoDaCasquinha]
    
    const valor = 
      dadosDoTipoDeSorvete.precoBase + 
      dadosDoTipoDeSorvete.precoAdicional *
      (this.length - dadosDoTipoDeSorvete.tamanhoMinimo)

    const formatadorDeMoeda = Intl.NumberFormat(
      'pt-BR', {style: 'currency', currency: 'BRL'}
    )

    const preco = formatadorDeMoeda.format(valor)

    return preco
  }
}

const casquinhaDeChocolatePequena = new CasquinhaDeSorvete('pequena')
console.log(casquinhaDeChocolatePequena.tamanhoDaCasquinha)
casquinhaDeChocolatePequena.push('chocolate amargo')
casquinhaDeChocolatePequena.push('chocolate amargo')
casquinhaDeChocolatePequena.push('banana')
casquinhaDeChocolatePequena.push('abacaxi')
casquinhaDeChocolatePequena.push('abacaxi')
casquinhaDeChocolatePequena.push('framboesa')

const casquinhaDeChocolateGrande = new CasquinhaDeSorvete('grande')
casquinhaDeChocolateGrande.push('chocolate amargo')
casquinhaDeChocolateGrande.push('chocolate amargo')
casquinhaDeChocolateGrande.push('banana')
casquinhaDeChocolateGrande.push('abacaxi')
casquinhaDeChocolateGrande.push('abacaxi')
casquinhaDeChocolateGrande.push('framboesa')

casquinhaDeChocolatePequena.pop()

casquinhaDeChocolatePequena.push('menta')
console.log(casquinhaDeChocolatePequena.printStack())
console.log(casquinhaDeChocolatePequena.retornaPreco())
console.log(casquinhaDeChocolateGrande.printStack())
console.log(casquinhaDeChocolateGrande.retornaPreco())