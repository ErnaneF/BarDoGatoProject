const productBebidas = [...document.querySelectorAll('.bebidas')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productBebidas.forEach((item, i) => {
    let bebidasDimensions = item.getBoundingClientRect();
    let bebidasWidth = bebidasDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += bebidasWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= bebidasWidth;
    })
})

const productCardapio = [...document.querySelectorAll('.cardapio')];
const nxtBtn2 = [...document.querySelectorAll('.nxt-btn2')];
const preBtn2 = [...document.querySelectorAll('.pre-btn2')];

productCardapio.forEach((item, i) => {
    let cardapioDimensions = item.getBoundingClientRect();
    let cardapioWidth = cardapioDimensions.width;

    nxtBtn2[i].addEventListener('click', () => {
        item.scrollLeft += cardapioWidth;
    })

    preBtn2[i].addEventListener('click', () => {
        item.scrollLeft -= cardapioWidth;
    })
})

window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none'; 
        } else  {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
};
    window.onresize=function(){
if(document.body.clientWidth > 600){
    document.querySelector("nav ul").style.display="flex"
    document.querySelector(".menuMobile").style.display="none"
    
}
else{
    document.querySelector(".menuMobile").style.display="flex"
    document.querySelector("nav ul").style.display="none"
}

}