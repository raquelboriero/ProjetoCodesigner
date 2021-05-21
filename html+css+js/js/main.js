var btnContact = document.querySelector('.jl-btn-contact');

// evento para quando clicar executar a função
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    //toggle -  Se estiver visível, remova-o, caso contrário, adicione-o
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
})
