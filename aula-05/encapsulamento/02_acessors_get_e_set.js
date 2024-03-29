class Circulo{
  #cor
  #coresValidas

  constructor(raio) {
    this.#cor="azul"
    this.#coresValidas = ['vermelho', 'azul', 'verde']
    this.raio = raio
    this.diametro = raio * 2
  }
  
  get cor() {
    return this.#cor 
  }
  
  set cor(color) {
    const corEhValida = this.#coresValidas.includes(color)
    this.#cor = corEhValida ? color : this.#cor
  }
}

const circulo1 = new Circulo(5)
// dará erro em navegadores modernos com suporte a propriedades privadas
// circulo1.#cor = 'verde'
circulo1.cor = "rosa"

// dará erro em navegadores modernos com suporte a propriedades privadas
// console.log(circulo1.#cor)
// console.log(circulo1.#nome)

console.log(circulo1)
console.log(circulo1.cor)