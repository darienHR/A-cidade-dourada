const avança = document.querySelectorAll('.btn-próximo');

avança.forEach(button =>{
    button.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
    const próximoPasso = 'passo-' + this.getAttribute('data-próximo');

    atual.classList.remove('ativo');
    document.getElementById(próximoPasso).classList.add('ativo');
    })
})