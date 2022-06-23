var lista = ["Bruna", "Lucas", "Miguel"]

console.log(lista)
console.log(lista.indexOf("Miguel"))//- me devolve que posição esta no array, caso não encontre o resultado que esta buscando ele devolve "-1"

lista[1] = "Lucas Ramos" //- alterando o valor
console.log(lista)

lista.push('Sueli') //- acrescenta um valor no array
console.log(lista)

lista.shift() // remove o primeiro valor do array
console.log(lista)

lista.pop() // remove o ultimo valor do array
console.log(lista)

console.log(lista.join('ok')) //- devolve todo o array em formato de string
console.log(lista)