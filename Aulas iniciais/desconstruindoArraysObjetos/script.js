// --- ### DESCONSTRUINDO OBJETOS ### ---

let pessoa = {
  nome: 'Lucas',
  sobrenome: 'Ramos',
  empresa: 'Sujeito Programador',
  cargo: 'Programador Fullstack'
}

console.log(pessoa.nome)

// --- desconstruindo
const { nome, cargo, sobrenome, empresa } = pessoa

console.log(nome)
console.log(cargo)
console.log(sobrenome)
console.log(empresa)



// --- ### DESCONSTRUINDO ARRAYS ### ---
let nomes = ["Lucas", "Ramos", "Bruneli"]

//EXEMPLO 01
/*
const { 0:PrimeiraPessoa, 2:TerceiraPessoa  } = nomes

console.log(PrimeiraPessoa)
console.log(TerceiraPessoa)
*/


//EXEMPLO 02
const [primeiroNome, segundoNome] = nomes

console.log(primeiroNome)
console.log(segundoNome)
