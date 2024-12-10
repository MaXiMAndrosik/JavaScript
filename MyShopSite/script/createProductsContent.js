'use strict';

export function createProductsContent(data) {
    const productTable = document.querySelector('.products__table');
    // Сохраняем в браузере информацию о продуктах полученных с бекенда
    localStorage.setItem('dataItems', JSON.stringify(data));

    data.forEach(element => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productTable.appendChild(productCard);

        // картинка продукта 
        const productImage = document.createElement('img');
        productImage.src = element.image;
        productImage.alt = 'product';
        productCard.appendChild(productImage);

        // div с кнопкой добавления товара в корзину 
        const divCart = document.createElement('div');
        divCart.className = 'product-card__cart';
        const buttonToCart = document.createElement('button');
        buttonToCart.className = 'product-card__btn addToCart';
        buttonToCart.id = element.id;
        buttonToCart.textContent = 'Add to Cart';
        const imageToCart = document.createElement('img');
        imageToCart.src = './img/basket.svg';
        imageToCart.alt = 'cart';
        productCard.appendChild(divCart);
        divCart.appendChild(buttonToCart);
        buttonToCart.insertAdjacentElement('afterbegin', imageToCart);

        // div с описанием товара
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card__text';
        productCard.appendChild(productDiv);
        // заголовок (название) продукта
        const productTitle = document.createElement('a');
        productTitle.className = 'product-card__link';
        productTitle.textContent = element.title;
        productTitle.href = './product.html';
        productDiv.appendChild(productTitle);
        // описание продукта
        const productDiscript = document.createElement('p');
        productDiscript.textContent = element.description;
        productDiv.appendChild(productDiscript);
        // цена продукта
        const productPrice = document.createElement('h3');
        productPrice.textContent = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(element.price);
        productDiv.appendChild(productPrice);

    });

    let classtemp = productTable.lastChild.className;
    productTable.lastChild.className = classtemp + ' hiden';
}