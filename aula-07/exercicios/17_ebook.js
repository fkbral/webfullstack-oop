// Crie uma classe Livro com as propriedades autor e ano. 
// Crie também as classes Ebook e AudioBook que herdam de Livro. 
// Ebook deve ter numero de páginas e número de capítulos. 
// Já a classe AudioBook deve ter a duração total do aúdio em minutos.

class Livro {
  constructor(autor, ano) {
    this.autor = autor
    this.ano = ano
  }
}

class Ebook extends Livro {
  constructor(autor, ano, paginas, capitulos) {
    super(autor, ano)

    this.paginas = paginas > 0 ? paginas : 1
    this.capitulos = capitulos > 0 ? capitulos : 1
  }
}

class AudioBook extends Livro {
  #duracaoDoAudio

  constructor(autor, ano, duracaoDoAudioEmSegundos) {
    super(autor, ano)
    this.#duracaoDoAudio = this.#validaDuracaoDoAudio(duracaoDoAudioEmSegundos)
  }

  get duracaoDoAudio() {
    return this.#duracaoDoAudio
  }

  set duracaoDoAudio(duracaoDoAudioEmSegundos) {
    return this.#validaDuracaoDoAudio(duracaoDoAudioEmSegundos)
  }

  #validaDuracaoDoAudio(duracaoDoAudioEmSegundos) {
    const minutos = Math.floor(duracaoDoAudioEmSegundos/60)
    const segundos = duracaoDoAudioEmSegundos%60

    this.#duracaoDoAudio = 
    `${minutos ? `${minutos}m` : ''}${segundos ? `${segundos}s` : ''}`

    return this.#duracaoDoAudio
  }
}

const audioBook1 = new AudioBook('Uncle Bob', 2010, 200*60 + 30)
const audioBook2 = new AudioBook('Uncle Bob', 2015, 100)
const audioBook3 = new AudioBook('Uncle Bob', 2018, 120)
console.log(audioBook1.duracaoDoAudio)
console.log(audioBook2.duracaoDoAudio)
console.log(audioBook3.duracaoDoAudio)
audioBook3.duracaoDoAudio = 50
console.log(audioBook3.duracaoDoAudio)