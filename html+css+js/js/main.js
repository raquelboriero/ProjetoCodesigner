//Declarando variáveis
var btnContact = document.querySelector('.jl-btn-contact');
var btnMensage = document.querySelector('.jl-btn-block');

//page preloader
window.addEventListener('load', function(){
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    this.setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000)
    /*foi necessário acresecentar o display none para que o Preloader saísse de vez e a função do botão voltasse a funcionar*/
     
    /*setTimeout()
    Executa um bloco específico uma vez depois de um determinado tempo 2000=2"*/
    
});


// ícone de Contato
// evento para quando clicar executar a função
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    //toggle -  Se estiver visível, remova-o, caso contrário, adicione-o
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
})


