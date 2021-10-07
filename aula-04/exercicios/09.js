// Crie uma classe Time que tenha como propriedade o nome do país,
// nome do esporte e a pontuação dele em um torneio. Sua pontuação 
// pode ser acrescida por um método pontua que recebe como parâmetro
// "W" para vitória (+3 pontos), "L" para derrota
// (+0 pontos) e "D" para empate (+1 ponto).

class Time {
  constructor(pais, esporte, pontuacao=0) {
    this.pais = pais
    this.esporte = esporte
    this.pontuacao = pontuacao
  }

  pontua(resultado) {
    let pontos = 0

    switch(resultado) {
      case 'W':
        pontos = 3
        break

      case 'D':
        pontos = 1
        break
          
      case 'L':
        pontos = 0
        break

      default:
        pontos = 0
        break
    }
    console.log(pontos)

    this.pontuacao += pontos
    return this.pontuacao
  }
}

const brasil = new Time('Brasil', 'Vôlei')
brasil.pontua('D')
brasil.pontua('W')
brasil.pontua('L')
brasil.pontua('W')
brasil.pontua('W')
brasil.pontua('W')
brasil.pontua('W')
console.log(brasil.pontuacao)