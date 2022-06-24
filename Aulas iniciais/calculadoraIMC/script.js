// --- ### CALCULADORA DE IMC ### ---

/* 
  Abaixo de 17 Kg muito abaixo do peso
  Entre 17 Kg e 18,49 Kg Abaixo do peso
  Entre 18,5 Jg e 24,99 Peso normal
  Entre 25 Kg e 29,99 Kg Acima do peso
*/

// formula de calculo IMC = peso / (altura * altura)

var peso
var altura
var imc
var resultado

function calcular(event) {
  event.preventDefault()

  peso = document.getElementById('peso').value
  altura = document.getElementById('altura').value

  imc = peso / (altura * altura)

  resultado = document.getElementById('resultado')

  if(imc < 17){
    resultado.innerHTML = `<br/> Seu resultado foi ${imc.toFixed(2)} <br/> Cuidado você está muito abaixo do peso!`
  } else if ( imc > 17 && imc <= 18.49) {
    resultado.innerHTML = `<br/> Seu resultado foi ${imc.toFixed(2)} <br/> Você esta abaixo do peso!`
  } else if ( imc >= 18.5 && imc <= 24.99) {
    resultado.innerHTML = `<br/> Seu resultado foi ${imc.toFixed(2)} <br/> Seu peso esta normal!`
  } else if ( imc >= 25 && imc <= 29.99) {
    resultado.innerHTML = `<br/> Seu resultado foi ${imc.toFixed(2)} <br/> Você esta acima do peso!`
  } else if ( imc > 30) {
    resultado.innerHTML = `<br/> Seu resultado foi ${imc.toFixed(2)} <br/> Cuidado, você esta obeso!`
  }
}