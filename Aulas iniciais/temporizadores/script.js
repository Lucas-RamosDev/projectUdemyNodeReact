 
// --- ### SETINTERVAL - executa uma ação repetindo no tempo desejado ### ---

// -- EXEMPLO 01
/*
function acao() {

  document.write("Executando... </br>")

}

setInterval(acao, 1000) // executa a ação a cada 1 segundo
*/

// --- EXEMPLO 02
/*
var timer = setInterval(() => {
  document.write("Executando... </br>")
}, 1000) // executa a ação a cada 1 segundo

clearInterval(timer) // quando eu executo este comando ele para de contar
*/



// --- ### SETTIMEOUT - executa uma unica vez a ação no tempo desejado ### ---

function acao() {

  document.write("Executando... </br>")

}

setTimeout(acao, 3000)


