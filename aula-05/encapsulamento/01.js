class Circulo{
  constructor(raio){
    const minhaCorDoCirculo = 'blue'
    this.raio = raio
    this.diametro = raio * 2

    this.getCor = () => { return minhaCorDoCirculo }
  }
}

const circulo1 = new Circulo(5)

console.log(circulo1)
circulo1.cor = "vermelho"
console.log(circulo1.cor)
console.log(circulo1.getCor())