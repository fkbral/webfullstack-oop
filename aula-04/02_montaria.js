// Vamos criar uma classe Animal que tenha como propriedades o peso, especie,
// montaria(verdadeiro ou falso) e
// método pessoaMonta (para a pessoa montar, o animal deve ser do 
// tipo montaria e o animal deve ser no mínimo
// 50% mais pesado que a pessoa)

// Animais que são considerados montaria: Cavalo, Burro, Pônei, Camelo, Dromedário

class Animal {
  constructor(especie, peso) {
    const montarias = ["cavalo", "burro", "pônei", "camelo", "dromedário"]

    this.especie = especie.toLowerCase()
    this.peso = peso
    this.ehMontaria = montarias.includes(especie.toLowerCase())
  }

  pessoaMonta(pesoDaPessoa) {
    console.log(
      this.peso > pesoDaPessoa * 1.5
      ? 'pessoa consegue montar neste animal'
      : 'pessoa não consegue montar no animal' 
    )
  }
}

const cavalo = new Animal('CAVALO', 140)
cavalo.pessoaMonta(70)

console.log(cavalo)
