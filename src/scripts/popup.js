let sing = document.querySelector('.header__user-item_singUp');
let login = document.querySelector('.header__user-item_logIn');
let form1 = document.querySelector('.popup__singUp');
let form2 = document.querySelector('.popup__logIn');
let close = document.querySelector('.popup__close');
let close2 = document.querySelector('.popup__close_log');

function showSingUp() {
    form1.style.display = "block";
    form2.style.display = "none";
}
function closeSingUp() {
    form1.style.display = "none";
}

function showLogin() {
    form2.style.display = "block";
    
}
function closeLogin() {
    form2.style.display = "none";
    form1.style.display = "none";
}
sing.addEventListener('click', showSingUp);
close.addEventListener('click', closeSingUp);
login.addEventListener('click', showLogin);
close2.addEventListener('click', closeLogin);


//cart
let cart = document.querySelector('.header__chart-box');
let modal = document.querySelector('.chart-modal');
let btn = document.querySelectorAll('.chart-modal__btn');

function showModal() {
    cart.classList.add('header__chart-box_active');
    modal.style.display = "block";
}
function closeModal() {
    cart.classList.remove('header__chart-box_active');
    modal.style.display = "none";
}

cart.addEventListener('click', showModal);
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', closeModal);
}