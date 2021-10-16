// Construa uma classe Programa com as propriedades duracao (em minutos) e generos 
// (ação, comédia, suspense, drama, terror) e duas classes que herdam desta
// (Seriado e Filme). A classe Seriado deve ter numeroDeEpisodios (de 1 a n),
// anoDeInicio e anoDeFim. Já a classe Filme precisa ter a duracao (em horas).

class Programa {
  #generosPermitidos = ["ação", "comédia", "suspense", "drama", "terror"]
  #generos
  #duracao

  constructor(duracao, generos) {
    this.#duracao = this.#validaDuracao(duracao)
    this.#generos = this.#validaGeneros(generos)
  }

  get generos() {
    return this.#generos
  }

  get duracao() {
    return this.#duracao
  }

  set duracao(duracao) {
    this.#duracao = this.#validaDuracao(duracao)
  }

  #validaGeneros(generos) {
    this.#generos = generos.filter(
      genero => this.#generosPermitidos.includes(genero)
    )

    return this.#generos
  }

  #validaDuracao(duracao) {
    const duracaoPadrao = this.#duracao ? this.#duracao : 1

    this.#duracao = duracao > 0 ? duracao : duracaoPadrao

    return this.#duracao
  }
}

class Filme extends Programa {
  constructor(duracao, generos) {
    super(duracao, generos)
  }

  // neste caso não seria vantajoso sobrescrever o getter, pois isto implicaria em 
  // "afrouxarmos" a variável privada #duracao para uma variável não privada
  // get duracao() {
  //   const duracaoDoPrograma = this.__devolveDuracaoDoFilme()
  //   return duracaoDoPrograma
  // }
  
  // #devolveDuracaoDoFilme() {
  //   const duracaoDoPrograma = 
  //     `${Math.floor(this.__duracao/60)}h${this.__duracao%60}min`

  //   return duracaoDoPrograma
  // }

  // exemplo de duração no filme: 130 minutos -> 2h5min
  get duracaoEmHoras() {
    const consideraHoras = Math.floor(this.duracao/60) > 0
    const horas = consideraHoras ? `${Math.floor(this.duracao/60)}h` : ''

    const consideraMinutos = this.duracao%60 > 0
    const minutos = consideraMinutos ? `${this.duracao%60}min` : ''

    return `${horas}${minutos}`
  }
}

class Seriado extends Programa {
  #anoDeFim
  constructor(duracao, generos, numeroDeEpisodios, anoDeInicio, anoDeFim) {
    super(duracao, generos)
    this.numeroDeEpisodios = numeroDeEpisodios > 0 ? numeroDeEpisodios : 1
    this.anoDeInicio = anoDeInicio > 1895 ? anoDeInicio : 1895
    this.#anoDeFim = this.#validaAnoDeFim(anoDeFim)
  }

  get anoDeFim() {
    return this.#anoDeFim
  }

  set anoDeFim(anoDeFim) {
    return this.#validaAnoDeFim(anoDeFim)
  }

  #validaAnoDeFim(anoDeFim) {
    this.#anoDeFim = this.anoDeInicio >= this.#anoDeFim ? anoDeFim : this.anoDeInicio

    return this.#anoDeFim
  }
}

const programaDeComedia = new Programa(25, ["comédia", "romance", "drama"])
console.log(programaDeComedia)
console.log(programaDeComedia.generos)
console.log(programaDeComedia.duracao)

programaDeComedia.duracao = -10
console.log(programaDeComedia.duracao)

const filmeDeAcao = new Filme(120, ["ação", "suspense"])
filmeDeAcao.duracao = -10

console.log(filmeDeAcao)
console.log(filmeDeAcao.duracao)
console.log(filmeDeAcao.duracaoEmHoras)

const filmeDeTerror = new Filme(50, ["terror", "suspense"])
console.log(filmeDeTerror.duracao)
console.log(filmeDeTerror.duracaoEmHoras)

const filmeDeDrama = new Filme(90, ["drama"])
console.log(filmeDeDrama.duracao)
console.log(filmeDeDrama.duracaoEmHoras)

const theOffice = new Seriado(22, ["comédia"], 200, 2005, 2014)

console.log(theOffice)