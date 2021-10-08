// Faça uma classe Album (de figurinhas) que tem como propriedades 
// a quantidade de figurinhas e um array de figurinhasColadas que 
// recebe os números das figurinhas coladas. Garanta que o array de 
// figurinhasColadas apenas pode crescer. Tenha também um método colarFigurinhas

// totalDeFigurinhas: 8
// 1 - 8
// figurinhasColadas: [1, 6]
// colarFigurinha 9

class Album {
  #figurinhasColadas

  constructor(totalDeFigurinhas, figurinhasColadas=[]) {
    this.totalDeFigurinhas = totalDeFigurinhas
    this.#figurinhasColadas = figurinhasColadas
  }

  get figurinhasColadas() {
    return this.#figurinhasColadas.sort()
  }

  colarFigurinhas(figurinhas) {
    const figurinhasValidas = figurinhas.filter(figurinha => {
      if (this.#figurinhasColadas.includes(figurinha)) {
        console.log(figurinha)
        return false
      }

      return figurinha < this.totalDeFigurinhas && figurinha > 0
    })

    // alternativa 2
    // const figurinhasValidas = figurinhas
    // .filter(figurinha => {
    //   return !this.#figurinhasColadas.includes(figurinha)
    // })
    // .filter(figurinha => {
    //   return figurinha < this.totalDeFigurinhas && figurinha > 0
    // })

    this.#figurinhasColadas = [...this.#figurinhasColadas, ...figurinhasValidas]
  }
}

const albumDaCopa = new Album(8)
albumDaCopa.colarFigurinhas([2, 5])
albumDaCopa.colarFigurinhas([6, 5])
albumDaCopa.colarFigurinhas([20, 4])
albumDaCopa.colarFigurinhas([1])
albumDaCopa.figurinhasColadas
console.log(albumDaCopa)