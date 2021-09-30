// const nomePessoa1 = 'Tiago'
// const emailPessoa1 = 'tiagoLM@outlook.com'
// const idadePessoa1 = 20

const pessoa = {
  nome: 'Tiago',
  email: 'tiagoLM@outlook.com',
  idade: 20,
}

// Se passar por valor, apenas o novo objeto terá a nova propriedade cpf
const pessoaComCPF = {
  ...pessoa,
  cpf: "123.456.789-01"
}

// Se passar por referência, os dois objetos vão ter a nova propriedade cpf
// const pessoaComCPF = pessoa
// pessoaComCPF.cpf = "123.456.789-01"

console.log(pessoa)
console.log(pessoaComCPF)