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
  // constructor(especie) {
  //   super(especie)
  // }

  voa() {
    return `${this.especie} voou`
  }
}

class Pato extends Ave {
  constructor(especie, penas) {
    super(especie)
    this.penas = penas
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

const pato1 = new Pato('pato', 400)
console.log(pato1.especie)

const gaivota = new Ave('gaivota')
console.log(gaivota)
console.log(gaivota.especie)
console.log(gaivota.fazBarulho())
console.log(gaivota.voa())