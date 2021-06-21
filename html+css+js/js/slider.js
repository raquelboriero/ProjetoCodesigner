// PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
var sliderListWidth = null;

//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth; // "sliderContainer pq o elemento pai está acima dele. OffsetWidth: propriedade para capturar a largura do elemento pai   ClientWidth, não considera o padding"

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth+'px';

for (var index = 0; index < sliderItem.length; index++) {
    sliderItem[index].style.width = containerWidth+'px';  // passando a largura para todos os itens da lista

    var sliderItemWidth = sliderItem[index].offsetWidth;
    sliderListWidth += sliderItemWidth; //pra cada item do lupe ele vai receber o valor da largura do item e somar com a variavel criada
}

sliderList.style.width = sliderListWidth + 'px' //passamos a soma de todas as larguras como a largura do slider


//Fazendo animação do slider onClick

var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;


//HANDLERS

//Next Slide Animação
var nextSlideAnim = function () {
    var lastItem = sliderListWidth - containerWidth; // sliderListWidth(largura total) -containerWidth(uma unidade) == está no último item
    
    if ((-1*(sliderPos) === lastItem)) {
       return;
    }
        sliderPos -= containerWidth;
        anime({
            targets: sliderList,
            translateX: sliderPos
          });    
}

//Prev Slide Animação
var prevSlideAnim = function() {
    if (sliderPos === 0) {
        return;
     }
         sliderPos += containerWidth;
         anime({
             targets: sliderList,
             translateX: sliderPos
           });  
}

//Troca Counter

//Troca Active Navigator



nextItem.addEventListener('click', function() {
    nextSlideAnim();
})

prevItem.addEventListener('click', function() {
    prevSlideAnim();
})