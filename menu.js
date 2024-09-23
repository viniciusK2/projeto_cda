// let menu = document.getElementById('menu-nav')
// let menuCor = document.getElementById('menu-muda-cor')
// let menuItem = document.querySelector('.menu-item')
// let whats = document.querySelector('.icone-whats')
// let footer = document.getElementById('footer')

// let posFooter = footer.getBoundingClientRect().y.toFixed(0)
// console.log(posFooter)
// document.addEventListener('scroll', rolar)

// let ultimaPosicao = 0;

// function rolar(){
//     let posicaoAtual = window.scrollY || document.documentElement.scrollTop;

//     let footerRect = footer.getBoundingClientRect()
//     let viewportHeight = window.innerHeight;

//     if(posicaoAtual > ultimaPosicao){
//         document.getElementById('menu-nav').className = "esconde-menu";
//     } else{
//      document.getElementById('menu-nav').className = ""
//     }
//     // if(posicaoAtual > 800 && posicaoAtual < 1800 || posicaoAtual > 2800 && posicaoAtual < 3800 || posicaoAtual > 4300 && posicaoAtual < 5800){
//     //     menuCor.style.backgroundColor = "#606d80"
//     //     // menuItem.style.color = '#20A6FF';
//     //     // menuItem.style.fontWeight = '500';
//     // } else{
//     //     menuCor.style.backgroundColor = ""
//     //     // menuItem.style.color = '';
//     //     // menuItem.style.fontWeight = '';
//     // }


//     if(posicaoAtual + viewportHeight > footerRect.top){
//         whats.style.display = 'none'
//     }else{
//         whats.style.display = 'block'

//     }

   
//     ultimaPosicao = posicaoAtual
// }


let menu = document.getElementById('menu-nav');
let menuCor = document.getElementById('menu-muda-cor');
let menuItem = document.querySelector('.menu-item');
let whats = document.querySelector('.icone-whats');
let footer = document.getElementById('footer');

document.addEventListener('scroll', rolar);

let ultimaPosicao = 0;

function rolar() {
    let posicaoAtual = window.scrollY || document.documentElement.scrollTop;
    let footerRect = footer.getBoundingClientRect();//Capturando a posição do elemento footter
    let whatsRect = whats.getBoundingClientRect()//Capturando a posição do elemento em relação a página do icone whats 
    console.log(whatsRect.y)
    let viewportHeight = window.innerHeight;//Pega o tamanho da viewport

    console.log('Posição Atual:', posicaoAtual);
    console.log('Top do Footer:', footerRect.top);
    console.log('Altura da Viewport:', viewportHeight);

    if (posicaoAtual - 3900 > footerRect.top) {//Se a posição atual for maior que o topo do footer, o icone do whats irá sumir.
        console.log('Footer alcançado ou ultrapassado.');//Debug
        whats.style.display = 'none';
    } else {
        console.log('Footer ainda não alcançado.');//Debug
        whats.style.display = 'block';
    }


    if(posicaoAtual > ultimaPosicao){
       document.getElementById('menu-nav').className = "esconde-menu";
    } else{
          document.getElementById('menu-nav').className = ""
    }
    ultimaPosicao = posicaoAtual;
}
