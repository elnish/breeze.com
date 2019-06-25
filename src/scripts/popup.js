!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

let modalButtons = document.querySelectorAll('.header__user-link'),
    overlay = document.querySelector('.popup__overlay'),
    closeButtons = document.querySelectorAll('.popup__close');

modalButtons.forEach(function(item){
    item.addEventListener('click', function(e) {
        e.preventDefault();
        let modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.container__popup[data-modal="' + modalId + '"]');
        modalElem.classList.add('active'); 
        overlay.classList.add('active');
    }); 
}); 

closeButtons.forEach(function(item){
    item.addEventListener('click', function(e) {
        let parentModal = this.closest('.container__popup');
        parentModal.classList.remove('active');
        overlay.classList.remove('active');
    });
}); 

overlay.addEventListener('click', function() {
    document.querySelector('.container__popup.active').classList.remove('active');
    this.classList.remove('active');
});


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

