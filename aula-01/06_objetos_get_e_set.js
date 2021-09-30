let nomeDeUsuarioPadrao

const pessoa = {
  nome: 'Tiago',
  email: 'tiagoLM@outlook.com',
  idade: 20,
  get dobroDaIdade() {
    return this.idade * 2
  },
  get userName() {
    return nomeDeUsuarioPadrao ? nomeDeUsuarioPadrao : this.email.split('@')[0]
  },
  set userName(nomeDeUsuario) {
    this.email = nomeDeUsuario + '@' + this.email.split('@')[1]
  },
  cumprimentaPessoa() {
    return ("Olá " + this.nome)
  },
}

pessoa.userName = "lolo"
pessoa.idade = 30

// pessoa
console.log(pessoa.idade)
console.log(pessoa.userName)
console.log(pessoa.email)

