// PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.jl-current-slide');
var totalSlide = document.querySelector('.jl-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.jl-item-navigator a');
var navCounter = document.querySelector('.jl-navigator-counter span');


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

//Counter Formater
var counterFormater = function (n) { //(adicionar o zero no número do contador)
    if (n < 10) {
        return '0'+n
    } else {
        return n
    }
}


//Counter add and remove

var counterAdd = function () {
    if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
        currentCounter++;
        currentSlide.innerHTML = counterFormater(currentCounter);
        navCounter.innerHTML = counterFormater(currentCounter);
    }

}

var counterRemove = function () {
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
        currentCounter--;
        currentSlide.innerHTML = counterFormater(currentCounter);
        navCounter.innerHTML = counterFormater(currentCounter);
    } 
}

//Set Active Nav

var setActiveNav = function () {
    for (var nv = 0; nv < navItems.length; nv++) {
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));
        if (myNavNum === currentCounter) {
            navItems[nv].classList.add('jl-item-active');

            anime({
                targets: '.jl-item-active',
                width: 90
              });    
        } 
    }
}

var changeActive = function () {
    for (var rm = 0; rm < navItems.length; rm++){
        navItems[rm].classList.remove('jl-item-active');
        anime({
            targets: navItems[rm],
            width: 20
          });  
        
    }

    setActiveNav();
}


//ACTIONS

totalSlide.innerHTML = counterFormater(sliderTotalItems);

nextItem.addEventListener('click', function() {
    nextSlideAnim();
    counterAdd();   
    changeActive();
})

prevItem.addEventListener('click', function() {
    prevSlideAnim();
    counterRemove();
    changeActive();
})