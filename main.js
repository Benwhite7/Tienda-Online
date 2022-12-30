let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuHamIcon = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let menuCarrito = document.querySelector('.navbar-shopping-cart');
let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
let cardsContainer = document.querySelector('.cards-container');

let productDetailContainer = document.querySelector('#productDetailone');
let productDetailContainertwo = document.querySelector('#productDetailtwo');
let productDetailContainerthree = document.querySelector('#productDetailthree');
let productDetailContainerfour = document.querySelector('#productDetailfour');
let productDetailCloseBotom = document.querySelector('.product-detail-close');
let productDetailCloseBotomtwo = document.querySelector('.product-detail-close2');
let productDetailCloseBotomthree = document.querySelector('.product-detail-close3');
let productDetailCloseBotomFour = document.querySelector('.product-detail-close4');

let ShoesOne = document.querySelector(".shoes-one");
let ShoesTwo = document.querySelector(".shoes-two");
let ShoesThree = document.querySelector(".shoes-three");
let ShoesFour = document.querySelector(".shoes-four");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);
ShoesOne.addEventListener("click", openProductDetailAsideone);
ShoesTwo.addEventListener("click", openProductDetailAsidetwo);
ShoesThree.addEventListener("click", openProductDetailAsidethree);
ShoesFour.addEventListener("click", openProductDetailAsideFour)
productDetailCloseBotom.addEventListener('click', closeProductDetailAside);
productDetailCloseBotomtwo.addEventListener('click', closeProductDetailAsidetwo);
productDetailCloseBotomthree.addEventListener('click', closeProductDetailAsidethree);
productDetailCloseBotomFour.addEventListener("click", closeProductDetailAsideFour)

function toggleDesktopMenu() {
  let isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  let isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  let isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
  let isproductDetailCloseBotom = productDetailContainer.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  if (!isdesktopMenuClosed) {
    desktopMenu.classList.add('inactive')
  }

  if (!isproductDetailCloseBotom) {
    productDetailContainer.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive');
}
//Primer Aside
function openProductDetailAsideone() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainertwo.classList.add('inactive');
  productDetailContainerthree.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
  productDetailContainerfour.classList.add('inactive');

}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}
//Segundo Aside
function openProductDetailAsidetwo() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  productDetailContainertwo.classList.remove('inactive');
  productDetailContainerthree.classList.add('inactive');
  productDetailContainerfour.classList.add('inactive');
}

function closeProductDetailAsidetwo() {
  productDetailContainertwo.classList.add('inactive');
}
//Tercer Aside
function openProductDetailAsidethree() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  productDetailContainertwo.classList.add('inactive');
  productDetailContainerthree.classList.remove('inactive');
  productDetailContainerfour.classList.add('inactive');
}

function closeProductDetailAsidethree() {
  productDetailContainerthree.classList.add('inactive');
}

//Cuarto Aside
function openProductDetailAsideFour() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  productDetailContainertwo.classList.add('inactive');
  productDetailContainerthree.classList.add('inactive');
  productDetailContainerfour.classList.remove('inactive');
}
function closeProductDetailAsideFour() {
  productDetailContainerfour.classList.add('inactive');
}
