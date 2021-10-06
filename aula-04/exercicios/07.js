// Crie uma classe CNH que tenha como propriedades país e idade que, por padrão,
// deve ser maior ou igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU.
// Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).

class CNH {
  constructor(inicialDoPais, idade, categoria) {
    const correspondenciaPaisIdade = {
      "US": 16,
      "CA": 16,
      "CH": 21,
      "RU": 21,
    }

    const categoriasValidas = ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE']
    
    const categoriaAjustada = 
    categoriasValidas.includes(categoria)
    ? categoria
    : 'categoria inválida'

    const idadeParaDirigir = 
    correspondenciaPaisIdade[inicialDoPais]
    ? correspondenciaPaisIdade[inicialDoPais]
    : 18

    this.pais = inicialDoPais
    this.idade = idade >= idadeParaDirigir ? idade : 'idade inválida'
    this.categoria = inicialDoPais === 'BR' ? categoriaAjustada : "N/A"
  }
}

const habilitacaoDoZe = new CNH('US', 26, 'AD')

console.log(habilitacaoDoZe)