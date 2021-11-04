// Em um restaurante existem quatro tipos de mesas para 2, 4, 6 e 8 pessoas. 
// Faça um gerenciador de filas simples que receba como parâmetro um objeto com as
// informações do grupo de pessoas e encaixe-o na fila correspondente. 
// Por exemplo, um grupo de 3 pessoas seria colocado em um mesa de 4
// pessoas e assim por diante. Se o grupo tiver mais de 8 pessoas, ele não poderá entrar na fila.

// grupo tem como parâmetro um id único e o número de pessoas

import { Queue } from '../../../../aula-12/02_queue.js'

const grupo1 = {
  id: '1',
  pessoas: 4,
}

const grupo2 = {
  id: '2',
  pessoas: 2
}

const grupo3 = {
  id: '3',
  pessoas: 1
}

const grupo4 = {
  id: '4',
  pessoas: 2
}

const grupo5 = {
  id: '5',
  pessoas: 10
}

const grupo6 = {
  id: '6',
  pessoas: 19
}

const grupos = [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6]

const fila2pessoas = new Queue()
const fila4pessoas = new Queue()
const fila6pessoas = new Queue()
const fila8pessoas = new Queue()
// const filasDisponiveis = [fila2pessoas, fila4pessoas, fila6pessoas, fila8pessoas]

const mapeiaNumeroDePessoasParaFila = {
  '2' : fila2pessoas,
  '4' : fila4pessoas,
  '6' : fila6pessoas,
  '8' : fila8pessoas,
}


function encontraMesaIdeal(grupo) {
  const maximoDePessoasPorMesas = [2, 4, 6, 8]

  const maximoDePessoasPorMesa = maximoDePessoasPorMesas.find(
    maximoDePessoasPorMesa => grupo.pessoas <= maximoDePessoasPorMesa
  )
    
  const mesaIdeal = mapeiaNumeroDePessoasParaFila[`${maximoDePessoasPorMesa}`]

  return mesaIdeal
}

function gerenciaFila(grupo) {
  const mesaIdeal = encontraMesaIdeal(grupo)

  if(!mesaIdeal) {
    console.log(grupo)
    divideGrupos(grupo)
    return
  }

  mesaIdeal.push(grupo)
}

function gerenciaFilaMultiplosGrupos(grupos) {
  grupos.forEach(grupo => gerenciaFila(grupo))
}

// quero dividir um grupo com mais de 8 pessoas em mais grupos, até que no último
// grupo criado tenha 8 pessoas ou menos
function divideGrupos(grupo) {
  let numeroDeNovosGruposACriar = Math.floor(grupo.pessoas/8) + 1
  const numeroDePessoasNaMesaRestante = grupo.pessoas % 8
  let numeroDeMesasCriadas = 0

  do {
    let novoGrupo = {
      id: `${grupo.id}-${numeroDeMesasCriadas}`,
      pessoas: numeroDeNovosGruposACriar > 1 ? 8 : grupo.pessoas % 8,
    }

    const mesaIdeal = encontraMesaIdeal(novoGrupo)
    
    mesaIdeal.push(novoGrupo)

    numeroDeNovosGruposACriar -= 1
    numeroDeMesasCriadas += 1
  } while (numeroDeNovosGruposACriar > 0 && numeroDePessoasNaMesaRestante > 0)
}

// gerenciaFila(grupo1)
// gerenciaFila(grupo2)
// gerenciaFila(grupo3)
// gerenciaFila(grupo4)
// gerenciaFila(grupo5)
// gerenciaFila(grupo6)

gerenciaFilaMultiplosGrupos(grupos)

console.log(fila2pessoas.printQueue())
console.log(fila4pessoas.printQueue())
console.log(fila6pessoas.printQueue())
console.log(fila8pessoas.printQueue())

