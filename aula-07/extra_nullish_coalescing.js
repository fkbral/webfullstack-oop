const numero = 0

// não funciona com 0
// valores que são avalidos em falsy: "", 0, false, NaN, undefined, null
const exibeNumeroTernario = numero ? numero : 'valor caso primeiro operador for falsy'

// só recebe o valor da direita caso o valor testado (no caso numero) seja null ou undefined
const exibeNumeroNullishCoalescing = numero ?? 'Ops número inválido'

console.log(exibeNumeroTernario)
console.log(exibeNumeroNullishCoalescing)