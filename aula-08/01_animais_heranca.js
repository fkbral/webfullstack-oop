// classe Animal
// propriedades: especie
// métodos: fazBarulho(), seAlimenta()

class Animal {
  constructor(especie) {
    this.especie = especie
  }

  fazBarulho() {
    return 'Brrrr'
  }

  seAlimenta() {
    return 'nhac'
  }
}

class Ave extends Animal {
  constructor(especie) {
    super(especie)
  }

  voa() {
    return `${this.especie} voou`
  }
}

class Peixe extends Animal {
  constructor(especie) {
    super(especie)
  }

  nada() {
    return `${this.especie} nadou`
  }
}

const gaivota = new Ave('gaivota')
console.log(gaivota)
console.log(gaivota.fazBarulho())
console.log(gaivota.voa())