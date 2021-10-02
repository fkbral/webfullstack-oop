const pessoa = {
  nome: 'Tiago',
  email: 'tiagoLM@outlook.com',
  idade: 20,
  get dobroDaIdade() {
    return this.idade * 2
  },
  get userName() {
    return this.email.split('@')[0]
  },
  cumprimentaPessoa() {
    return ("Olá " + this.nome)
  },
}

function constroiPessoa (nomeDaPessoa, emailDaPessoa, idadeDaPessoa) {
  return {
    nome:nomeDaPessoa,
    email: emailDaPessoa,
    idade: idadeDaPessoa,
    get dobroDaIdade() {
      return this.idade * 2
    },
    get userName() {
      return this.email.split('@')[0]
    },
    cumprimentaPessoa() {
      return ("Olá " + this.nome)
    }
  }
}

const pessoa2 = {
  ...pessoa,
}

const pessoa3 = {
  nome: 'Fulano',
  email: 'fulanodasilva@email.com',
  idade: 24,
  get dobroDaIdade() {
    return this.idade * 2
  },
  get userName() {
    return this.email.split('@')[0]
  },
  cumprimentaPessoa() {
    return ("Olá " + this.nome)
  },
}

const pessoa4 = constroiPessoa('Fulano', 'fulanodasilva@email.com', 24)
const pessoa5 = constroiPessoa('Ciclano', 'ciclanodasilva@email.com', 26)

console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa5)
