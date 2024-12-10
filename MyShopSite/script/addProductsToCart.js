'use strict';
import { removeProductsFromCart } from './workWithCard.js';

export function addProductEvents() {
    const buttons = document.querySelectorAll('.addToCart');
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', () => {
            const productId = buttons[index].getAttribute('id');
            addProductToCart(productId);
        });
    }
}

// Массив обьектов продуктов добавленных в корзину -> json-формат
let productsArray = [];
// Получение продуктов из localStorage
if (localStorage.getItem('products') &&
    localStorage.getItem('products') != 'undefined' &&
    JSON.parse(localStorage.getItem('products').length != 0)) {
    // Получаем массив из localStorage и показываем количество продуктов в корзине
    productsArray = JSON.parse(localStorage.getItem('products'));
    document.querySelector('.header-navi__cart_sales').innerHTML = productsArray.length;
    document.querySelector('.header-navi__cart_sales').style.display = 'flex';
    console.log(productsArray);
} else {
    removeProductsFromCart();
}

function addProductToCart(id) {
    const items = JSON.parse(localStorage.getItem('dataItems'));
    items.forEach(element => {
        if (element.id == id) {
            productsArray.push(element);
        }
    });
    document.querySelector('.header-navi__cart_sales').innerHTML = productsArray.length;
    document.querySelector('.header-navi__cart_sales').style.display = 'flex';
    localStorage.setItem('products', JSON.stringify(productsArray));
    console.log(productsArray);
}

// console.log(Notification.permission);
// const notification = new Notification("Товар успешно добавлен в корзину");
// console.log(notification);

// Notification.requestPermission(newMessage);
// function newMessage(permission) {
//   if (permission != "granted") return false;
//   var notify = new Notification("Thanks for letting notify you");
//   console.log(notify);
// };