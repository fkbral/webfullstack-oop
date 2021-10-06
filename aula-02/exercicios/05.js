// Faça um objeto TV com as propriedades canal, volume e ligada e métodos
// liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.
const CANAL_DEFAULT = 2
const VOLUME_DEFAULT = 0

class constroiTV {
  constructor() {
    this.canal = CANAL_DEFAULT
    this.volume = VOLUME_DEFAULT
    this.ligada = false
  }

  liga() {
    if (!this.ligada) {
      this.ligada = true
    }
  }
  
  desliga() {
    if (this.ligada) {
      this.ligada = false
    }
  }
  
  mudaDeCanal(canal) {
    this.canal = canal
  }
  
  aumentaVolume() {
    if (this.volume < 100){
      this.volume += 1
    }
  }
  
  diminuiVolume() {
    if (this.volume > 0){
      this.volume -= 1
    }
  }
}

const tv = new constroiTV()
console.log(tv)

console.log('a tv está ligada: ' + tv.ligada)

tv.liga()
console.log('a tv está ligada: ' + tv.ligada)

tv.desliga()
console.log('a tv está ligada: ' + tv.ligada)

console.log('canal da tv: ' + tv.canal)

tv.mudaDeCanal(25)
console.log('canal da tv: ' + tv.canal)


console.log('volume: ' + tv.volume)
tv.aumentaVolume()
console.log('volume: ' + tv.volume)

tv.aumentaVolume()
console.log('volume: ' + tv.volume)

tv.aumentaVolume()
console.log('volume: ' + tv.volume)

tv.diminuiVolume()
console.log('volume: ' + tv.volume)

tv.diminuiVolume()
console.log('volume: ' + tv.volume)

tv.diminuiVolume()
console.log('volume: ' + tv.volume)

tv.diminuiVolume()
console.log('volume: ' + tv.volume)

