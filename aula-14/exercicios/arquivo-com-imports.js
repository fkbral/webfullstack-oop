import { Queue as Fila } from '../../aula-12/02_queue.js'
import ola, { oi2, pessoaPadrao } from './arquivo-com-exports.js'

console.log(ola)
console.log(oi2)
pessoaPadrao.idade = 25
console.log(pessoaPadrao)

const filaDePessoas = new Fila()
filaDePessoas.push(pessoaPadrao)

// export const teste = "oi mundo"
const teste = "oi mundo"

export { ola, oi2, teste }
export default filaDePessoas

console.log(filaDePessoas.printQueue())