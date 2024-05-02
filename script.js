const logo = document.getElementById('logo');
const heart = document.querySelector('.heart-outline');
let produtos = document.querySelectorAll('.produtos');

// Selecionando os elementos do menu
const contSUone = document.querySelector('.container-showup-menu');

const cach = document.getElementById('cach');
const gato = document.getElementById('gato');
const pass = document.getElementById('pass');
const prom = document.getElementById('prom');

let isMouseOverContSUone = false;

// Função para mostrar o menu ao passar o mouse sobre um item do menu
function showMenu(menu) {
    menu.style.display = "block";
}

// Função para esconder o menu após 1 segundo
function hideMenu(menu) {
    setTimeout(function(){
        if (!isMouseOverContSUone) {
            menu.style.display = "none";
        }
    }, 100);
}

// EVENTOS MOUSEOVER E MOUSEOUT PARA O ELEMENTO cach
cach.addEventListener("click", function() {
    showMenu(contSUone);
});
cach.addEventListener("mouseout", function() {
    hideMenu(contSUone);
});

// EVENTOS MOUSEOVER E MOUSEOUT PARA O ELEMENTO gato
gato.addEventListener("click", function() {
    const menuGato = document.querySelector('.showup-2');
    showMenu(menuGato);
});
gato.addEventListener("mouseout", function() {
    const menuGato = document.querySelector('.showup-2');
    hideMenu(menuGato);
});

// EVENTOS MOUSEOVER E MOUSEOUT PARA O ELEMENTO pass
pass.addEventListener("click", function() {
    const menuPass = document.querySelector('.showup-3');
    showMenu(menuPass);
});
pass.addEventListener("mouseout", function() {
    const menuPass = document.querySelector('.showup-3');
    hideMenu(menuPass);
});

// EVENTOS MOUSEOVER E MOUSEOUT PARA O ELEMENTO prom
prom.addEventListener("click", function() {
    showMenu(contSUone);
});
prom.addEventListener("mouseout", function() {
    hideMenu(contSUone);
});

// EVENTO MOUSEOVER E MOUSEOUT PARA O ELEMENTO contSUone
contSUone.addEventListener("click", function(){
    isMouseOverContSUone = true;
});

contSUone.addEventListener("mouseout", function(){
    isMouseOverContSUone = false;
    hideMenu(contSUone);
});

// EVENTOS MOUSEOVER E MOUSEOUT PARA OS ELEMENTOS h5 DENTRO DE contSUone
const h5Elements = document.querySelectorAll('.container-showup-menu .showup-options');
h5Elements.forEach(function(h5) {
    h5.addEventListener("mouseover", function(){
        isMouseOverContSUone = true;
    });

    h5.addEventListener("mouseout", function(){
        isMouseOverContSUone = false;
        hideMenu(contSUone);
    });
});

// EVENTO MOUSEOVER PARA O ELEMENTO heart
heart.addEventListener("click", function() {
    heart.setAttribute("name", "heart");
    heart.style.color = "red";
});

// EVENTO CLICK PARA O ELEMENTO logo
logo.addEventListener('click', function() {
    window.location.href = 'index.html';
});

produtos.forEach(function(prod) {
    prod.addEventListener('click', function() {
        window.location.href = 'pdcompras/paginaCompras.html';
    });
});
