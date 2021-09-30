// Faça um objeto pessoa com as propriedades 
// nomeCompleto, email e primeiroNome (com get).

const pessoa = {
  nomeCompleto: 'Fulano Da Silva',
  email: 'fulanodasilva@outlook.com',
  get primeiroNome() {
    // const nomes = this.nomeCompleto.split(' ')
    // return nomes[0]

    const [nome] = this.nomeCompleto.split(' ')
    return nome
  }
}

console.log(pessoa.primeiroNome)