
// SWITCH

function pedir() {
  
  var valor = prompt("Digite um valor de 1 a 4")
  //Prompt sempre devolve valor em string
  console.log(typeof valor)

  Number(valor) //convertendo em número

  switch(Number(valor)) {
    case 1:
      alert("Você escolheu 1 = suco")
      break
    case 2:
      alert("Você escolheu 2 = Água Gelada")
      break
    case 3:
      alert("Você escolheu 3 = Sorvete")
      break
    case 4:
      alert("Você chamou o garçom!")
      break
    default: // caso não ache o valor fora do que usamos
      alert("Escolha um opção entre 1 a 4!")
      break
  }

}