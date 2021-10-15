// Construa uma classe Veiculo que tem como propriedades rodas (1 a n),
// usaCombustivel (true/false), uma classe Carro
// (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo 
// e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) 
// que também herda as características de Veiculo.

class Veiculo {
  #rodas

  constructor(rodas, usaCombustivel) {
    this.#rodas = this.#validaRodas(rodas)
    this.usaCombustivel = usaCombustivel
  }

  get rodas() {
    return this.#rodas
  }

  set rodas(numero) {
    return this.#validaRodas(numero)
  }

  #validaRodas(rodas) {
    if (rodas > 0) {
      this.#rodas = rodas
    }

    if (!this.#rodas) {
      this.#rodas = 1
    }

    return this.#rodas
  }
}

class Bicicleta extends Veiculo {
  constructor(rodas, usaCombustivel) {
    super(rodas, usaCombustivel)
  }

  get infantil () {
    return this.rodas > 2
  }
}

class Carro extends Veiculo {
  #tipoDecombustivel
  #combustiveisPermitidos = ['gasolina', 'álcool', 'flex', 'elétrico']

  constructor(rodas, usaCombustivel, tipoDecombustivel) {
    super(rodas, usaCombustivel)
    this.#tipoDecombustivel = this.#validaTipoDeCombustivel(tipoDecombustivel)
  }

  get tipoDecombustivel() {
    return this.#tipoDecombustivel
  }

  set tipoDecombustivel(tipoDecombustivel) {
    this.#tipoDecombustivel = this.#validaTipoDeCombustivel(tipoDecombustivel)
  }

  #validaTipoDeCombustivel(tipoDecombustivel) {
    this.#tipoDecombustivel = 
      this.#combustiveisPermitidos.includes(tipoDecombustivel)
      ? tipoDecombustivel
      : 'gasolina'

    return this.#tipoDecombustivel
  }
}

const veiculoGenerico = new Veiculo(2, false)
console.log(veiculoGenerico.rodas)
{
  const bicicletaAdulta = new Bicicleta(2, false)
  const bicicletaInfantil = new Bicicleta(4, false)
  console.log(bicicletaAdulta.infantil)
  console.log(bicicletaInfantil.infantil)
  
  // bicicletaInfantil.rodas = 2
  bicicletaInfantil.infantil = false
  console.log(bicicletaInfantil.infantil)
}

const gol = new Carro(4, true, 'gasolina')
console.log(gol.tipoDecombustivel)
gol.tipoDecombustivel = 'gnv'
console.log(gol.tipoDecombustivel)

  