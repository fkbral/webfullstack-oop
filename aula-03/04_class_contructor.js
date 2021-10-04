class Lapis {
  constructor(corDoLapis = "preta", tipo = "2B") {
    this.tipo = tipo
    this.cor = corDoLapis
  }
}

const lapis1 = new Lapis("vermelha")
const lapis2 = new Lapis()

console.log(lapis1)
console.log(lapis2)