// Utilizando como base a classe:
//   Dispositivo: 
//   + calcula()
// Faça alguns mixins para as seguintes funcionalidades:
//   + ilumina()
//   + acessaInternet()
//   + tiraFoto()
//   + registraPassos()
// Para construir as seguintes classes:
//   Relogio: + calcula(), + acessaInternet(), + registraPassos()
//   Computador: + calcula(), + acessaInternet(), + tiraFoto()
//   Celular: + calcula(), + ilumina(), + acessaInternet(), + tiraFoto(), + registraPassos()

class Dispositivo {
  calcula() {
    return 'calcula'
  }
}

function MixinAcessaInternet(classe) {
  return class extends classe {
    acessaInternet() {
      return 'acessaInternet'
    }
  }
}

function MixinIlumina(classe) {
  return class extends classe {
    ilumina() {
      return 'ilumina'
    }
  }
}

function MixinTiraFoto(classe) {
  return class extends classe {
    tiraFoto() {
      return 'tiraFoto'
    }
  }
}

function MixinRegistraPassos(classe) {
  return class extends classe {
    registraPassos() {
      return 'registraPassos'
    }
  }
}

class Relogio extends MixinAcessaInternet(MixinRegistraPassos(Dispositivo)) {}
class Computador extends MixinAcessaInternet(MixinTiraFoto(Dispositivo)) {}
// class Celular extends MixinIlumina(MixinRegistraPassos(
//   MixinAcessaInternet(MixinTiraFoto(Dispositivo))
// )) {}

class Celular extends MixinIlumina(MixinRegistraPassos(Computador)) {}

const smartWatch = new Relogio()
const laptop = new Computador()
const s10 = new Celular()

console.log(smartWatch.calcula())
console.log(smartWatch.ilumina?.())
console.log(smartWatch.acessaInternet())
console.log(smartWatch.registraPassos())

console.log(laptop.acessaInternet())
console.log(laptop.registraPassos?.())
console.log(laptop.calcula())
console.log(laptop.tiraFoto())

console.log(s10.acessaInternet())
console.log(s10.registraPassos?.())
console.log(s10.calcula())
console.log(s10.tiraFoto())
console.log(s10.ilumina())

