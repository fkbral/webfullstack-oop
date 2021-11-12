class Carro {
  // marcasCriadas = {
  //   vw: 10,
  //   honda: 3,
  //   nissan: 5
  // }

  static marcasCriadas = {}
  static tiposCriados = {}

  constructor(marca, tipo) {
    this.marca = marca
    this.tipo = tipo
    this.#calculaNumeroDeMarcasCriadas()
    this.#calculaTiposDeMarcasCriadas()
  }

  #calculaNumeroDeMarcasCriadas() {
    const numeroDeCarrosDaMarca = Carro.marcasCriadas[this.marca]

    Carro.marcasCriadas[this.marca] = numeroDeCarrosDaMarca
      ? numeroDeCarrosDaMarca + 1
      : 1
  }

  #calculaTiposDeMarcasCriadas() {
    const numeroDeCarrosDaMarca = Carro.tiposCriados[this.tipo]

    Carro.tiposCriados[this.tipo] = numeroDeCarrosDaMarca
      ? numeroDeCarrosDaMarca + 1
      : 1
  }
}

const fusca = new Carro('vw', 'hatch')
const gol = new Carro('vw', 'hatch')
const golf = new Carro('vw', 'hatch')
const golfSedan = new Carro('vw', 'sedan')
const civic = new Carro('honda', 'sedan')

console.log(civic)

console.log(Carro.marcasCriadas)
console.log(Carro.tiposCriados)
