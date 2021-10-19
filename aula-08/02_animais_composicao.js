// classe Animal
// propriedades: especie
// métodos: fazBarulho(), seAlimenta()

function compoe(...funcoes) {
  return function(texto) {
    let resultadoDaUltimaFuncao = texto

    for (funcao of funcoes) {
      resultadoDaUltimaFuncao = funcao(resultadoDaUltimaFuncao)
    }

    return resultadoDaUltimaFuncao
  }
}

class Animal {
  constructor(especie) {
    this.especie = especie
  }

  fazBarulho() {
    return 'Brrrr'
  }

  seAlimenta() {
    return 'nhac'
  }
}

const MixinVoa = (superClasse) => {
  return class extends superClasse {
    // se eu não tiver propriedades novas, não preciso definir o constructor, pois
    // o construtor do pai será chamado automaticamente
    // constructor(especie, penas) {
    //   super(especie)
    //   this.penas = penas
    // }
    voa() {
      return `${this.especie} voou`
    }
  }
}

const MixinAnda = (superClasse) => {
  return class extends superClasse {
    anda() {
      return `${this.especie} andou`
    }
  }
}

const MixinNada = (superClasse) => {
  return class extends superClasse {
    nada() {
      return `${this.especie} nadou`
    }
  }
}

class PassaroVoador extends MixinAnda(MixinVoa(Animal)) {}
// class PassaroVoadorENadador extends MixinNada(MixinAnda(MixinVoa(Animal))) {}
class PassaroVoadorENadador extends compoe(MixinNada, MixinVoa, MixinAnda)(Animal) {}
// class PassaroVoadorENadador extends MixinNada(PassaroVoador) {}
// class PassaroVoador extends MixinVoa(Animal) {}

{
  const pomba = new PassaroVoador('pomba')
  console.log(pomba)
  console.log(pomba.fazBarulho())
  // console.log(pomba.penas)
  console.log(pomba.nada?.())
  console.log(pomba.voa())
  console.log(pomba.anda())

  const pato = new PassaroVoadorENadador('pato')
  console.log(pato)
  console.log(pato.fazBarulho())
  // console.log(pato.penas)
  console.log(pato.nada?.())
  console.log(pato.voa())
  console.log(pato.anda())
}
