// Queremos montar uma classe Prato com as seguintes propriedades: nome (string),
// valor (number), quantidade (number) e tipo (string: sem restrições, vegetariano, vegano).

class Prato {
  constructor(nome, tipo = 'sem restrições', quantidade = 0) {
    const tipoPermitidos = ['sem restrições', 'vegetariano', 'vegano']

    this.nome = nome
    this.quantidade = quantidade
    this.tipo = tipoPermitidos.includes(tipo) ? tipo : 'sem restrições'
  }
}

const beterraba = new Prato('beterraba assada', 'vegano')
const ovo = new Prato('ovo pochê', 'vegetariano')

console.log(beterraba)
console.log(ovo)
