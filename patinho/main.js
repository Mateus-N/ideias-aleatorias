const quantidadeDeFilhotes = document.querySelector('#quantidade')
const btn = document.querySelector('#btn-cantar')
const resposta = document.querySelector('#musica')
const pergunta = document.querySelector('#nomeDoFilhote')

const filhote = 'patinho'
const mae = 'pata'
const chamadoDaMae = 'Quá, quá, quá, quá'

pergunta.innerText = `${filhote}s`

btn.addEventListener('click', () => {
  if (quantidadeDeFilhotes.value > 0) {
    resposta.innerText = cantarRefrao(quantidadeDeFilhotes.value)
    resposta.innerText += cantarFinal(quantidadeDeFilhotes.value)
  }
})

function cantarRefrao(quantidade) {
  let retorno = ''
  
  while (quantidade > 0) {
    retorno += `\n${quantidade} ${filhote}${quantidade > 1 ? 's\nforam' : '\nfoi'} passear
    Além das montanhas
    Para brincar
    A mamãe gritou
    ${chamadoDaMae}`
    quantidade--
    if (quantidade > 0) {
      retorno += `\nMas só ${quantidade} ${filhote}${quantidade > 1 ? 's\nvoltaram' : '\nvoltou'} de lá\n`
    } else {
      retorno += `\nMas nenhum ${filhote}\nvoltou de lá\n`
    }
  }
  
  return retorno
}

function cantarFinal(quantidade) {
  return `\nA mamãe ${mae}
    foi procurar
    Além das montanhas
    Na beira do mar
    A mamãe griou
    ${chamadoDaMae}
    E ${quantidade} ${filhote}${quantidade > 1 ? 's\nvoltaram' : '\nvoltou'} de lá\n`
}