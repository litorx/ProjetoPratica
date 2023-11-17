document.querySelector('.open-menu').addEventListener('click', e => {
    document.querySelector('header .menu').classList.add('open');
});

document.querySelector('.close-menu button').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
});

document.querySelector('.menu .backdrop').addEventListener('click', e => {
    document.querySelector('header .menu').classList.remove('open');
});

document.getElementById('ComecoBtnFooter').addEventListener('click', function() {
    window.scrollTo(0, 0);
});

function redirecionarParaPagina(caminho) {
    window.location.href = caminho;
}

document.getElementById('CadastroBtn').addEventListener('click', function() {
    redirecionarParaPagina('cadastro.html');
});

document.getElementById('SobreBtn').addEventListener('click', function() {
    redirecionarParaPagina('sobre.html');
});

document.getElementById('SobreBtnFooter').addEventListener('click', function() {
    redirecionarParaPagina('sobre.html');
});

document.getElementById('EmergenciaBtn').addEventListener('click', function() {
    redirecionarParaPagina('emergencia.html');
});

document.getElementById('EmergenciaBtnFooter').addEventListener('click', function() {
    redirecionarParaPagina('emergencia.html');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    redirecionarParaPagina('cadastroPet.html');
});
