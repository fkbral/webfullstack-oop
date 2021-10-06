class Dog {
  constructor(breed="mutt", castrated=false){
    this.breed = breed // vira-lata
    this.castrated = castrated
    // this.bark = () => {
    //   console.log('Huff')
    // }
  }

  bark() {
    if(this.breed === 'poodle') {
      return console.log('Huff, i\'m a poodle')
    }
    console.log('Huff')
  }
}

const dog1 = new Dog()
const dog2 = new Dog('poodle', true)
console.log(dog1)
console.log(dog2)

dog1.bark()
dog2.bark()
