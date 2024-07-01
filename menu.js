let menu = document.getElementById('menu-nav')
let menuCor = document.getElementById('menu-muda-cor')
console.log(menuCor)

document.addEventListener('scroll', rolar)

let ultimaPosicao = 0;

function rolar(){

    
    let posicaoAtual = window.scrollY;

    if(posicaoAtual > ultimaPosicao){
        document.getElementById('menu-nav').className = "teste";
    } else{
     document.getElementById('menu-nav').className = ""
    }
    if(posicaoAtual > 800 && posicaoAtual < 1800 || posicaoAtual > 2800 && posicaoAtual < 3800 || posicaoAtual > 4300 && posicaoAtual < 5800){
        menuCor.style.backgroundColor = "#225522"
    } else{
        menuCor.style.backgroundColor = ""
    }

   
    ultimaPosicao = posicaoAtual
}