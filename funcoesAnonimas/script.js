
// FUNÇÕES ANONIMAS

function somar( valor1, valor2) {
  let total = valor1 + valor2
  return console.log(`${valor1} + ${valor2} = ${total}`)
}

somar(2,2)

let subtrair = (valor1, valor2) => {
  let total = valor1 - valor2
  return console.log(`${valor1} - ${valor2} = ${total}`)
}

subtrair(5,2)