// Crie uma classe cachorro(dog) que 
// tenha duas propriedades raça(breed), castrado(castrated) (true/false)

class Dog {
  constructor(breed="mutt", castrated=false){
    this.breed = breed // vira-lata
    this.castrated = castrated
  }
}

const dog1 = new Dog()
const dog2 = new Dog('poodle', true)
console.log(dog1)
console.log(dog2)