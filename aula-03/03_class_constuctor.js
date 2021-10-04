// jeito mais longo de fazer argumentos padrão
class LapisComIfNaCor {
  constructor(corDoLapis) {
    const COR_DEFAULT = "preta"
    if (!corDoLapis) {
      this.cor = COR_DEFAULT
    }
    else {
      this.cor = corDoLapis
    }
  }
}

class LapisComOperadorOrNaCor {
  constructor(corDoLapis) {
    const COR_DEFAULT = "preta"
    this.cor = corDoLapis || COR_DEFAULT
  }
}

class Lapis {
  constructor(corDoLapis="preta") {
    this.cor = corDoLapis
  }
}

const lapis1 = new Lapis("vermelha")
const lapis2 = new Lapis()

console.log(lapis1)
console.log(lapis2)

