let menu = document.getElementById('menu-nav')



document.addEventListener('scroll', rolar)

let ultimaPosicao = 0;

function rolar(){

    
    let posicaoAtual = window.scrollY;

    if(posicaoAtual > ultimaPosicao){
        document.getElementById('menu-nav').className ="some-menu";
    } else{
     document.getElementById('menu-nav').className = ""
    }
   
   
    ultimaPosicao = posicaoAtual
}