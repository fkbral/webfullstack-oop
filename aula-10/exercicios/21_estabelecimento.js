class Estabelecimento {
  constructor(id, produtos=[]) {
    this.id = id
    this.produtos = produtos
  }
}

class Farmacia extends MixinRemedios(Estabelecimento) {}

class Restaurante extends MixinPremios(Estabelecimento) {}

class Bar extends MixinBebida(MixinPremios(Estabelecimento)) {}

class Remedio {
  constructor(nome, deveSerPrescrito=false) {
    this.nome = nome
    this.deveSerPrescrito = deveSerPrescrito
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
      return 'falta implementar'
    }
  }
}

function MixinBebida(classe) {
  return class extends classe {
    pedeBebida(idade, bebida) {
      return 'falta implementar'
    }
  }
}

const estabelecimentoGenerico = new Estabelecimento('1')
console.log(estabelecimentoGenerico)

const remedios = [new Remedio('vitamina C'), new Remedio('cortisona', true)]

const farmacia = new Farmacia('2', remedios)
console.log(farmacia.compraRemedio(['cortisona'], remedios))