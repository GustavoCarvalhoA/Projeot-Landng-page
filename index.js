var seta = window.document.getElementById ("seta-direita")
var card1 = window.document.getElementById ("cards1")
var card2 = window.document.getElementById ("cards2")
var card3 = window.document.getElementById ("cards3")
var setaesquerda = window.document.getElementById ("seta-esquerda")

function PassarImagem(){

    setaesquerda.style = "display:flex; margin-top: 60px"
    seta.style = "display:none"
    cards1.style = "display:none"
    cards3.style = "display:flex" 

    
   
} 
function PassarImagem2(){

    setaesquerda.style = "display:none; margin-top: 60px"
    seta.style = "display:flex"
    cards1.style = "display:flex"
    cards3.style = "display:none"
}