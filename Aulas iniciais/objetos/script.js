


// --- ### OBJETOS ### ---

let pessoa = {
  nome: 'Lucas',
  idade: 30,
  altura: 1.75,
  cargo: 'Programador FullStack'
}
console.log(pessoa)

const nomePessoa = pessoa.nome
console.log(nomePessoa)


let carro = {
  nome: 'Golf 1.6',
  cor: "Branco",
  potencia: "140cv"
}
console.log(carro.potencia)

// --- ### LISTA DE OBJETOS -- ###

let usuarios = [
  {nome: 'Lucas', cargo: 'Programador', status:"ativo"},
  {nome: 'Miguel', cargo: 'Backend', status:"ativo"},
  {nome: 'Bruna', cargo: 'Frontend', status:"ativo"}
]
console.log(usuarios)

console.log(usuarios[2].cargo)