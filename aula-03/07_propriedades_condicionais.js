// class Filme terá propriedades ano, que não pode anteceder 1895 e categorias que
// podem ser suspense, drama, ação, comédia e terror

class Filme {
  constructor(ano, categorias) {
    const categoriasPermitidas = ["suspense", "drama", "ação", "comédia", "terror"]

    const categoriasValidas = categorias.filter(categoria => {
      return categoriasPermitidas.includes(categoria)
    })

    this.ano = (ano < 1895) ? 'N/A' : ano
    this.categorias = categoriasValidas
  }
}

const filme1 = new Filme(2010, ['ação', 'romance'])
console.log(filme1)