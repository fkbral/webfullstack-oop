// Faça uma classe Boletim para uma faculdade com as propriedades nome (do aluno),
// ano (maior que 1964), semestre(de 1 a 14) e um array média com as médias de 6 máterias.

class Boletim {
  constructor(nome, ano, semestre, medias) {
    this.nome = nome
    this.ano = ano > 1964 ? ano : 'ano inválido'
    this.semestre = (semestre > 0 && semestre < 15) ? semestre : 'semestre inválido' 
    // this.medias = medias.every(media => {
    //   console.log(media)
    //   return media >= 0 && media <= 10
    // }) ? medias : 'alguma média está com erro'

    this.medias = medias.some(media => {
      console.log(media)
      return media < 0 || media > 10
    }) ? 'alguma média está com erro' : medias
  }
}

const BoletimComErros = new Boletim('Jonas', '1920', 20, [10, 9, -8, 0, 6, 5])
const BoletimDoJonas = new Boletim('Jonas', '1999', 10, [10, 9, 8, 7, 6, 5])

console.log(BoletimComErros)
console.log(BoletimDoJonas)