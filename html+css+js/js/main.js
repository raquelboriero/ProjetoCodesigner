//Declarando variáveis
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal')


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


// abrindo e fechando o modal de orçamentos

for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');
    });
    
}

// animando elementos on Scroll com Waypoints
var mySrcollDown = document.querySelector('.jl-scroll-down')
var waypoint = new Waypoint(
    {
    element: mySrcollDown,
    handler: function() {
      mySrcollDown.classList.toggle('jl-fade-out')
    },
    offset: '80%'
  })


