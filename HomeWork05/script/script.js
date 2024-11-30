'use strict';

let data = JSON.parse(dataJson);

const conteiner = document.querySelector('body');
conteiner.className = 'conteiner max_conteiner';


function createProductContent(data) {
    const productsList = document.querySelector('#product-list');
    productsList.className = 'products__table';

    data.forEach(element => {
        // создаем элемент li класс product-card который будет содержать 
        // в себе карточку продукта
        const productElement = document.createElement('li');
        productElement.className = 'product-card';
        productsList.appendChild(productElement);

        // картинка продукта 
        const productImage = document.createElement('img');
        productImage.src = element.image;
        productImage.alt = element.title;
        productImage.style.width = '360px';
        productImage.style.height = '420px';
        productElement.appendChild(productImage);

        // Кнопка
        const divCart = document.createElement('div');
        divCart.className = 'product-card__cart';
        const buttonToCart = document.createElement('button');
        buttonToCart.className = 'product-card__btn addToCart';
        buttonToCart.textContent = 'Add to Cart';
        buttonToCart.id = element.id;
        productElement.appendChild(divCart);
        divCart.appendChild(buttonToCart);

        // div с описанием товара
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card__text';
        productElement.appendChild(productDiv);

        // заголовок (название) продукта
        const productTitle = document.createElement('a');
        productTitle.className = 'product-card__link';
        productTitle.textContent = element.title;
        productTitle.href = '#';
        productDiv.appendChild(productTitle);

        // описание продукта
        const productDiscript = document.createElement('p');
        productDiscript.textContent = element.description;
        productDiv.appendChild(productDiscript);

        // цена продукта
        const productPrice = document.createElement('h3');
        productPrice.textContent = element.price + '$';
        productDiv.appendChild(productPrice);

    });
}

document.addEventListener('DOMContentLoaded', createProductContent(data));

const buttons = document.querySelectorAll('.addToCart');
function detectProductId() {
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', () => {
            console.log(buttons[index].id);
        });
    }
}
detectProductId();
