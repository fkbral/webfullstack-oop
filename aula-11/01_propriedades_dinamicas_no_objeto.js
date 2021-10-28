const objetoTeste = {
  documento: {
    cpf: '123.456.789-01',
    rg: '35411-124-1',
  }
}

const tipoDeDocumento = 'cpf'

console.log(objetoTeste["documento"]["cpf"])
console.log(objetoTeste.documento.cpf)
console.log(objetoTeste.documento[tipoDeDocumento])