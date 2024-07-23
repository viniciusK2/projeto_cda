let menu = document.getElementById('menu-nav')
let menuCor = document.getElementById('menu-muda-cor')
let menuItem = document.querySelector('.menu-item')
let whats = document.querySelector('.icone-whats')


document.addEventListener('scroll', rolar)

let ultimaPosicao = 0;

function rolar(){

    
    let posicaoAtual = window.scrollY;
    console.log(posicaoAtual)

    if(posicaoAtual > ultimaPosicao){
        document.getElementById('menu-nav').className = "esconde-menu";
    } else{
     document.getElementById('menu-nav').className = ""
    }
    // if(posicaoAtual > 800 && posicaoAtual < 1800 || posicaoAtual > 2800 && posicaoAtual < 3800 || posicaoAtual > 4300 && posicaoAtual < 5800){
    //     menuCor.style.backgroundColor = "#606d80"
    //     // menuItem.style.color = '#20A6FF';
    //     // menuItem.style.fontWeight = '500';
    // } else{
    //     menuCor.style.backgroundColor = ""
    //     // menuItem.style.color = '';
    //     // menuItem.style.fontWeight = '';
    // }

    if(posicaoAtual > 4750){
        whats.style.display = 'none'
    }else{
        whats.style.display = ''

    }

   
    ultimaPosicao = posicaoAtual
}