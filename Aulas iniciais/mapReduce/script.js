
// --- ### MAP ### ---

let lista = ["Lucas", "Miguel", "Bruna"]
lista.map((item, index) => {

  console.log(`Passando: ${item} - Posição ${index} do array`)

})

// --- ### REDUCE - busca reduzir um array ### ---

let numeros = [5, 3, 2, 4]

let total = numeros.reduce((acumulador, numero, indice, original) => {

  console.log("------------------------------------")
  console.log(`${acumulador} - Total até o momento`)
  console.log(`${numero} - Valor atual`)
  console.log(`${indice} - Indice atual`)
  console.log(`${original} - array original`)
  console.log("------------------------------------")

  return acumulador += numero

})

console.log(`Total do Reduce: ${total}`)