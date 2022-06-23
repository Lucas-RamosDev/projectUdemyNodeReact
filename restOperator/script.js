// --- ### REST OPERATOR ### ---

// EXEMPLO 01 ---------------------------------------------

function convidados(...nomes) {
  console.log("Seja bem vindos, todos os convidados")
  console.log(nomes)

}

convidados("Lucas", "Miguel", "Bruna", "Ramos")


// EXEMPLO 02 ---------------------------------------------

function sorteador(...numeros) {
  console.log(numeros)

  const numeroSelecionadoArray = Math.floor( Math.random() * numeros.length)
  console.log(numeroSelecionadoArray)

  const numeroSorteado = numeros[numeroSelecionadoArray]
  console.log(`O número sorteado foi ${numeroSorteado}`)

}

sorteador(1, 4, 5, 15, 25, 90, 55, 34)