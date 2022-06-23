
// --- ### SPREAD OPERATOR ### ---

// EXEMPLO COM ARRAYS ---------------------------------------------------------

let primeiros = [1, 2, 3]

let numeros = [4, 5, 6]

const spreadOperator = [...primeiros, ...numeros]
console.log(spreadOperator)


// EXEMPLO COM OBJETOS ---------------------------------------------------------

let pessoa = {
  nome: "Lucas",
  idade: 30,
  cargo: "RH"
}

let novasInfos = {
  status: "ativo",
  cidade: "Cerquilho",
}

let novaPessoa = {...pessoa, ...novasInfos}
console.log(novaPessoa)


// EXEMPLO 03 ----------------------------------------------------------

function novoUsuario(info) {

  let dados = {
    ...info,
    status: "Ativo",
    inicio: "20/03/2022",
    codigo: "123123"
  }

  console.log(dados)
}

novoUsuario({ nome: "Lucas", idade: 35, cargo: "DEVELOPER" })