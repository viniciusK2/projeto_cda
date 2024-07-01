let menu = document.getElementById('menu-nav')
let menuCor = document.getElementById('menu-muda-cor')
let menuItem = document.querySelector('.menu-item')
console.log(menuItem)

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
        menuCor.style.backgroundColor = "#606d80"
        // menuItem.style.color = '#20A6FF';
        // menuItem.style.fontWeight = '500';
    } else{
        menuCor.style.backgroundColor = ""
        // menuItem.style.color = '';
        // menuItem.style.fontWeight = '';
    }

   
    ultimaPosicao = posicaoAtual
}