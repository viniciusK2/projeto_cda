let menu = document.getElementById('menu-nav');
let menuCor = document.getElementById('menu-muda-cor');
let menuItem = document.querySelector('.menu-item');
let whats = document.getElementById('icone-whats');
let footer = document.getElementById('footer');//Captura o footer



//Some e aparece o icone whats
document.addEventListener("scroll", ()=>{//Evento de scroll
    //Verifica se o topo do footer - a altura da tela for menor ou igual a zero, o elemento whats irá sumir, se não o elemento o whats será mostrado
    if(footer.getBoundingClientRect().top - innerHeight <= 0){
        document.querySelector("#icone-whats").style.right = "-50px"

    }else{
        document.querySelector("#icone-whats").style.right= "100px"
    }
})


let ultimaPosicao = 0;//Define a última posição

document.addEventListener("scroll", ()=>{//Evento de scrolar a tela
    //Posição atual recebe a posição do scroll no eixo Y
    let posicaoAtual = scrollY
    //Se a posição atual for maior que a última posição que é zero, o menu será escondido, se não, o menu irá aparece.
    if(posicaoAtual > ultimaPosicao){
        // document.getElementById('menu-nav').className = "esconde-menu";
        document.querySelector(".fixed-top").style.top = "-150px"
        document.querySelector(".fixed-top").style.transition = "top 1s"
     } else{
           document.querySelector(".fixed-top").style.top = "20px"
           document.querySelector(".fixed-top").style.transition = "top 1s"
     }
     //ultima posição recebe a posição atual toda vez que a função for chamada, ou seja se a posição atual for 50 na última vez que a função for chamada esse será o valor atribuido a última posicao. Quando ocorre um novo if a posição atual receberá um novo valor, por exemplo 20, então 20 não será maior que 50, fazendo o menu aparecer, isso indica que o usuário está scrolando para cima. 
     ultimaPosicao = posicaoAtual;
})


