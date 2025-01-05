//----------------------------------------------------------------
// Заполнение страницы карточками продуктов данными из JSON.
'use strict';

import { createProductsContent } from './createProductsContent.js';
import { addProductEvents } from './addProductsToCart.js';
import { createCartContent } from './workWithCard.js';

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
    createCartContent();
    break;
}

async function getData(url) {
  try {
    const response = await fetch(url);
    const inputData = await response.json();
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
  menuActive.classList.toggle("hidden-burger");
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