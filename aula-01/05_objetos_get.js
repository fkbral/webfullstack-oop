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

console.log(pessoa.userName)
