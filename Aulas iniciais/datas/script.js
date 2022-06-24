var data = new Date() // cria a data atual
console.log(data)



// --- ### desmembrando as datas / horas ### ---
var horas = data.getHours()
console.log(horas)

var minutos = data.getMinutes()
console.log(minutos)

var segundos = data.getSeconds()
console.log(segundos)

var Milesegundos = data.getMilliseconds()
console.log(Milesegundos)

var dia = data.getDate()
console.log(dia)

var mes = data.getMonth()
var mesReal = mes + 1
console.log(mesReal)

var ano = data.getFullYear()
console.log(ano)

var diaSemana = data.getDay()
console.log(diaSemana)

var dataCompleta = data.getDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear()
console.log(dataCompleta)

// --- ### CRIANDO DATAS ### ---
var dataNova = new Date("06/22/2022")
console.log(dataNova)

var dataNovaMilesegundos = Date.parse(dataNova) // converte data em milesegundos
console.log(dataNovaMilesegundos)


// --- ### SOMANDO DATAS ### ---
var somaData = dataNova.setDate(dataNova.getDate()+5)
console.log(new Date(somaData))

// --- ### MOSTRANDO O DIA DA SEMANA ### ---

var dataAtual = new Date()

var diaSemanaNova = dataAtual.getDay()
console.log(diaSemanaNova)

var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

console.log(dias[diaSemanaNova])