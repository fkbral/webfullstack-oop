class Estabelecimento {
  constructor(id, produtos=[]) {
    this.id = id
    this.produtos = produtos
  }
}

class Farmacia extends MixinRemedios(Estabelecimento) {}

class Restaurante extends MixinPremios(Estabelecimento) {}

class Bar extends MixinBebida(MixinPremios(Estabelecimento)) {}

class Produto {
  constructor(nome) {
    this.nome = nome 
  }
}

class Remedio extends Produto {
  constructor(nome, deveSerPrescrito=false) {
    super(nome)
    this.deveSerPrescrito = deveSerPrescrito
  }
}

class Cartela {
  constructor(idDoEstabelecimento, carimbos) {
    this.idDoEstabelecimento = idDoEstabelecimento
    this.carimbos = carimbos
  }
}

function MixinRemedios(classe) {
  return class extends classe {
    compraRemedio(prescricao, remedios) {
      const remediosEmEstoque = remedios.filter(remedio => {
        return this.produtos.includes(remedio)
      })

      const remedioQuePossoComprar = remediosEmEstoque.filter(
        remedio => 
        !remedio.deveSerPrescrito ||
        prescricao.includes(remedio.nome)
      )

      return remedioQuePossoComprar.map(remedio => remedio.nome)
    }
  }
}

function MixinPremios(classe) {
  return class extends classe {
    constructor(id, produtos, pontosParaResgatarPremio) {
      super(id, produtos)
      this.pontosParaResgatarPremio = pontosParaResgatarPremio
    }
  
    resgataPremio(cartela) {
      if (cartela.idDoEstabelecimento !== this.id) {
        return 'cartela passada não é válida para este estabelecimento'
      }

      if (cartela.carimbos <= this.pontosParaResgatarPremio) {
        const pontosRestantes = this.pontosParaResgatarPremio - cartela.carimbos
        return `pontos insuficientes. Faltam 
        ${pontosRestantes} ponto(s) para resgatar prêmio`
      }
      
      cartela.carimbos -= this.pontosParaResgatarPremio
      return 'parabéns, você resgatou seu prêmio'
    }
  }
}

function MixinBebida(classe) {
  return class extends classe {
    pedeBebida(idade, bebida) {
      if (idade > 18) {
        return 'Menor de idade não pode pedir bebida no bar'
      }

      // nosso array original
      // [{nome: 'capirinha'}, {nome: 'cerveja'}]
      // arrary gerado pelo map
      // ['capirinha', 'cerveja']
      const arrayComNomesDasBebidas = this.produtos.map(produto => produto.nome)

      if (!arrayComNomesDasBebidas.includes(bebida)) {
        return 'Bar não tem a bebida escolhida em estoque'
      }

      return bebida
    }
  }
}

const estabelecimentoGenerico = new Estabelecimento('1')
console.log(estabelecimentoGenerico)

const remedios = [new Remedio('vitamina C'), new Remedio('cortisona', true)]

const farmacia = new Farmacia('2', remedios)
const pizzaria = new Restaurante('3', [], 5)
const cartelaDaPizzaria = new Cartela(pizzaria.id, 7)

const barDoZeca = new Bar('4', [new Produto('capirinha'), new Produto('cerveja')], 3)

console.log(barDoZeca.pedeBebida(20, 'cerveja'))

console.log(pizzaria.resgataPremio(cartelaDaPizzaria))
console.log(cartelaDaPizzaria.carimbos)

console.log(farmacia.compraRemedio(['cortisona'], remedios))