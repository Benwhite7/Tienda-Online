let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuHamIcon = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let menuCarrito = document.querySelector('.navbar-shopping-cart');
let shoppingCartContainer = document.querySelector ('#shoppingCartContainer');
let cardsContainer=document.querySelector('.cards-container');
let productDetailContainer = document.querySelector('#productDetail');
let productDetailCloseBotom = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);
productDetailCloseBotom.addEventListener('click',closeProductDetailAside)

function toggleDesktopMenu() {
  let isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }
 desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
let isAsideClosed = shoppingCartContainer.classList.contains('inactive')

if (!isAsideClosed){
  shoppingCartContainer.classList.add('inactive')
}
closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
let isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
let isproductDetailCloseBotom = productDetailContainer.classList.contains('inactive');
if (!isMobileMenuClosed){
  mobileMenu.classList.add('inactive')
}

if (!isdesktopMenuClosed){
  desktopMenu.classList.add('inactive')
}

if(!isproductDetailCloseBotom){
  productDetailContainer.classList.add('inactive')
}

 shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
  shoppingCartContainer.classList.add('inactive');
 productDetailContainer.classList.remove('inactive') ;
}

function closeProductDetailAside () {
productDetailContainer.classList.add('inactive') ;
}

const productList = [];
productList.push({
  name:'Adidas Lite Racer',
  price :160,
  img :'./images/Lite Racer 2.0.jpeg',
});
productList.push({
  name:'Adidas X Speedflow.4 Fxg',
  price :200,
  img :'./images/X speedflow.4 .jpeg',
});
productList.push({
  name:'Reebok Runner',
  price :180,
  img :'./images/ReebokRunner.jpeg',
});

  for (product of productList) {
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');

    let productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    productImg.addEventListener('click' , openProductDetailAside )

    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    let productInfoDiv = document.createElement('div');

    let productPrice = document.createElement('p');
    productPrice.innerText = 'S/' + product.price;
    let productName = document.createElement('p');
    productName.innerText = product.name;

    let productInfoFigure = document.createElement('figure');
    let productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

  } 