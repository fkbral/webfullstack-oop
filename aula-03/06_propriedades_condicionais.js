
class Caneta {
  constructor(corDaCaneta, tipo = "esferográfica") {
    const corPadrao = "preta"
    const coresPermitidas = ["vermelha", "azul", "preta"]

    // poderia descobrir se a cor da caneta é valida com includes
    const tipoEhValido = coresPermitidas.includes(corDaCaneta)

    // ou poderia descobrir se a cor da caneta é valida com find
    // const tipoEhValido = coresPermitidas.find(cor => {
    //   return (cor === corDaCaneta)
    // })

    if (!tipoEhValido) {
      console.log('Cor inválida')
    }

    console.log(tipoEhValido)
    console.log(corDaCaneta)

    this.tipo = tipo
    this.cor = tipoEhValido ? corDaCaneta : corPadrao
  }
}

const caneta1 = new Caneta("verde")
const caneta2 = new Caneta("azul")

console.log(caneta1)
console.log(caneta2)