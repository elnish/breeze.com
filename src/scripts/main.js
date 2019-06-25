//change color active btn
let changeLang = document.querySelectorAll('.header__change-list')[0];
let btns = changeLang.getElementsByClassName('change-list__item');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
  let current = document.getElementsByClassName('change-list__item_active');
  current[0].className = current[0].className.replace(' change-list__item_active', '');
  this.className += ' change-list__item_active';
  });
}

var changeCarrency = document.querySelectorAll('.header__change-list')[1];
var btns2 = changeCarrency.getElementsByClassName('change-list__item_thin');
for (let i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener('click', function() {
  var current = document.getElementsByClassName('change-list__item_active');
  current[0].className = current[0].className.replace(' change-list__item_active', '');
  this.className += ' change-list__item_active';
  });
}

//humburger
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu__list');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active'); 
    menu.classList.toggle('menu__list_show'); 
});
