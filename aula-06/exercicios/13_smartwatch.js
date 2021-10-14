// Faça uma classe SmartWatch com a contagem dos passos diários de uma pessoa 
// (pedômetro). Garanta utilizando acessors (get/set) que os passos apenas podem
// ser incrementados e um método resetOnMidnight() que reseta os passos para 0.

class Smartwatch {
  #passos

  constructor(passos=0) {
    this.#passos = this.#validaPassos(passos)
  }

  get passos() {
    return this.#passos
  }

  set passos(passos) {
    return this.#validaPassos(passos)
  }

  #validaPassos(passos) {
    if (!this.#passos) {
      this.#passos = 0
    }

    if (passos > this.#passos) {
      this.#passos = passos
    }

    return this.#passos
  }

  resetOnMidnight() {
    this.#passos = 0
  }
}

const appleWatch = new Smartwatch(1000)
const fitbit = new Smartwatch(7000)

console.log(fitbit.passos)
fitbit.passos = 9000
console.log(fitbit.passos)

console.log(appleWatch.passos)
appleWatch.passos = 3000
console.log(appleWatch.passos)
appleWatch.passos = 500
console.log(appleWatch.passos)

appleWatch.resetOnMidnight()
console.log(appleWatch.passos)

