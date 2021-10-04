function soma(numero1=0, numero2=0, numero3=0, tiraMedia=false) {
  const resultado = numero1 + numero2 + numero3

  console.log(numero1)
  console.log(numero2)
  console.log(numero3)

  if(tiraMedia) {
    console.log('A média dos números é: ', resultado/3)
  }

  return resultado
}

const resultado = soma(10, 5, 5, true)

console.log(resultado)