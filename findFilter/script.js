
// --- ### FIND ### ---

let listagem = [5, 3, "Jose", 2, "Mateus"]

let busca = listagem.find((item) => {

  if(item === "Jose") {

    return console.log("Item encontrado com sucesso")

  }
})


// --- ### FILTER ### ---

let palavras = ["Matheus", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador"]

let resultado = palavras.filter((item) => {
  
  return item.length <= 4 // me retorna as palavras que tem menor ou igual a 4 caracteres

})

console.log(resultado)