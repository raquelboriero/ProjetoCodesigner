//Declarando variáveis
var btnContact = document.querySelector('.jl-btn-contact');

//page preloader
window.addEventListener('load', function(){
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');
     
    /*setTimeout()
    Executa um bloco específico uma vez depois de um determinado tempo 5000=5"*/
    
});


// ícone de Contato
// evento para quando clicar executar a função
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    //toggle -  Se estiver visível, remova-o, caso contrário, adicione-o
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
})
