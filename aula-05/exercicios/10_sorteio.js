// Deseja-se montar uma classe Sorteio que tem o número de pessoas
// inscritas e um método sorteiaPremio que sorteia um número que corresponderá
// ao número de inscrição do participante e declara o vencedor.

class Sorteio {
  constructor(inscritos) {
    this.inscritos = inscritos
  }

  sorteiaPremio() {
    const sorteado = Math.floor(1 + Math.random() * this.inscritos)

    console.log(`O vencedor do sorteio foi o inscrito de número ${sorteado}`)

    return sorteado
  }
}

const rifa = new Sorteio(100)

console.log(rifa.sorteiaPremio())

console.log(rifa)