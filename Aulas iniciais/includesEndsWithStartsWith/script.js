
// ---### INCLUDES - localiza a informação desejada dentro do Array ### ---

let nomes = ["Matheus", "Lucas", "Jose"]
console.log(nomes.includes("Lucas"))

const pesquisa = "Maria"

if(nomes.includes(pesquisa)) {
  console.log(`O nome ${pesquisa} esta na lista`)
} else {
  console.log(`O nome ${pesquisa} NÃO esta na lista`)
}

// --- ### STARTSWITH - localiza se a palavra começa com a pesquisa desejada ### ---

let carros = ["HB20", "Civic", "Corolla"]

console.log(carros.startsWith("Ci"))

// --- ### ENDSWITH - localiza se a palavra termina com a pesquisa desejada ### ---

let frutas = ["abacaxi", "morango", "uva"]

console.log(frutas.endsWith("aba"))