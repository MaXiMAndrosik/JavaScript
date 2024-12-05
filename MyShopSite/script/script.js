//----------------------------------------------------------------
// Заполнение страницы карточками продуктов данными из JSON.
'use strict';

import { createProductsContent } from './createProductsContent.js';
import { addProductEvents, addCartEvents } from './moveProductsInCart.js';
// import { removeProductFromCart } from './moveProductsToCart';

let url = '';
switch (document.title) {
  case 'Shop':
    url = './script/indexData.json';
    break;
  case 'Catalog':
    url = './script/catalogData.json';
    break;
  case 'Product':
    url = './script/productData.json';
    break;
  case 'Cart':
    addCartEvents(); // Добавление событий к кнопкам "Добавить в корзину"
    break;
}

async function getData(url) {
  try {
    const response = await fetch(url);
    const inputData = response.json();
    return inputData;
  } catch (error) {
    console.log(error.message);
  }
}

if (url && url != '') {
  document.addEventListener('DOMContentLoaded', async (e) => {
    const data = await getData(url);
    createProductsContent(data);
    addProductEvents(); // Добавление событий к кнопкам "Добавить в корзину"
  });
}

//----------------------------------------------------------------
// Работа с бургер меню
const menuActive = document.querySelector(".burgerMenu");
const burger = document.querySelector(".menu");
const menuClose = document.querySelector(".burgerMenu__exit");

function toogleMenu() {
  menuActive.classList.toggle("hidden");
}

burger.addEventListener('click', toogleMenu);
menuClose.addEventListener('click', toogleMenu);

//----------------------------------------------------------------
// Автоматическое скрытие не выбранного элемента summary
const summaries = document.querySelectorAll('.summary_autoclose');

summaries.forEach((summary) => {
  summary.addEventListener('click', closeOpenedDetails);
});

function closeOpenedDetails() {
  summaries.forEach((summary) => {
    let detail = summary.parentNode;
    if (detail != this.parentNode) {
      detail.removeAttribute('open');
    }
  });
}

//-----------------------------------------------------------------
// Добавление счетчика заказов в корзину
// Перенос значения переменной на другие страницы
// let count = 0;
// // const buttons = document.querySelectorAll('.addToCart');
// const cart = document.querySelector('.header-navi__cart_sales');
// const clearCart = document.querySelector('.clear_cart');
// const delProduct = document.querySelectorAll('.del_product');
// // Удаление всех продуктов из корзины // сброс счетчика товаров
// function resetCart() {
//   cart.style.display = 'none';
//   count = 0;
//   cart.innerHTML = count;
//   localStorage.setItem('count', cart.innerHTML);
// }
// Удаление одного продукта из корзины // -1 к счетчику товаров
// function delCartItem() {
//   if (count > 1) {
//     count--;
//     cart.innerHTML = count;
//     localStorage.setItem('count', cart.innerHTML);
//   } else {
//     resetCart();
//   }
// }
//-----------------------------------------------------------------

