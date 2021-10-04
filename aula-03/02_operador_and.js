const array = [1, 2, 3]

if (array && array.length) {
  array.map(numero => {
    console.log(numero)
    return numero
  })
}

// mesma coisa que o if de cima
array && array.length && array.map(numero => {
  console.log(numero)
  return numero
})