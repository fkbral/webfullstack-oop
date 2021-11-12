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
    Carro.calculaNumeroDeMarcasCriadas(this)
    Carro.calculaTiposDeMarcasCriadas(this)
  }

  static calculaNumeroDeMarcasCriadas(carro) {
    console.log(carro.marca)
    const numeroDeCarrosDaMarca = Carro.marcasCriadas[carro.marca]

    Carro.marcasCriadas[carro.marca] = numeroDeCarrosDaMarca
      ? numeroDeCarrosDaMarca + 1
      : 1
  }

  static calculaTiposDeMarcasCriadas(carro) {
    console.log(carro.tipo)
    const numeroDeCarrosDaMarca = Carro.tiposCriados[carro.tipo]

    Carro.tiposCriados[carro.tipo] = numeroDeCarrosDaMarca
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
