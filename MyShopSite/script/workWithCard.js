'use strict';

export function createCartContent() {
    const productsArray = JSON.parse(localStorage.getItem('products')) || [];
    if (productsArray.length === 0) {
        document.querySelector('.cart-products').insertAdjacentHTML('beforeend', `
        <div class="cart-products__basket_empty">
        <h3 class="cart-products__basket_empty__title">The basket is currently empty</h3>
        <p class="cart-products__basket_empty__text">Browse the catalog to select products or&nbsp;find what you need in the search</p>
        <a class="cart-products__basket_empty__btn" href="./catalog.html">GO TO CATALOG</a>
        </div>`);
        document.querySelector('.cart-products').setAttribute('style', 'display: block;')
        document.querySelector('.cart-products__rightPart').setAttribute('style', 'display: none;')
        document.querySelector('.cart-products__leftPart').setAttribute('style', 'display: none;')

    } else {
        productsArray.forEach(element => {
            document.querySelector('.cart-products__productCards').insertAdjacentHTML('beforeend',
                `<div class="product-box">
                <img class="product-box__image" src="${element.image}" alt="product">
                <div class="product-box__content">
                    <a href="./product.html" class="product-box__content_link">${element.title}</a>
                    <div class="product-box__discription">
                        <p class="product-box__discription__item">Price: <span
                                class="product-box__discription__item_selectRed">${new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(element.price)}</span></p>
                        <p class="product-box__discription__item">Color: <span
                                class="product-box__discription__item_select">${element.color}</span></p>
                        <p class="product-box__discription__item">Size: <span
                                class="product-box__discription__item_select">${element.size}</span></p>
                        <p class="product-box__discription__item">Quantity:
                            <input class="product-box__discription__item_input" type="number" value="${element.count}" min="1" id="${element.id}">
                        </p>
                    </div>
    
                <form action="./cart.html">
                    <button class="product-box__content_cancel del_product" id="${element.id}">
                        <svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none">
                            <defs />
                            <path
                                d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z"
                                fill="#575757" fill-opacity="1.000000" fill-rule="nonzero" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>`)
        });
        addCartEvents(); // Добавление событий к кнопкам "Добавить в корзину"
        createPrice();
    }
}

function addCartEvents() {
    document.querySelector('.clear_cart').addEventListener('click', removeProductsFromCart);
    document.querySelectorAll('.del_product').forEach(element => {
        element.addEventListener('click', removeFromCart);
    });
    document.querySelectorAll('.product-box__discription__item_input').forEach(element => {
        element.addEventListener('change', (event) => {
            const productsArray = JSON.parse(localStorage.getItem('products')) || [];
            productsArray.forEach(item => {
                if (item.id == (event.target.closest('input')).getAttribute("id")) {
                    item.count = event.target.value;
                }
            });
            localStorage.setItem('products', JSON.stringify(productsArray));
            createPrice();
        });
    });
}

export function removeProductsFromCart(productsArray) {
    localStorage.clear();
    productsArray = [];
    document.querySelector('.header-navi__cart_sales').innerHTML = productsArray.length;
    document.querySelector('.header-navi__cart_sales').style.display = 'none';
}

function removeFromCart() {
    const productsArray = JSON.parse(localStorage.getItem('products')) || [];
    let productsArrayResult = productsArray.filter((product) => product.id != (event.target.closest('button')).getAttribute("id"));
    localStorage.setItem('products', JSON.stringify(productsArrayResult));
    // console.log(productsArrayResult);
    if (productsArrayResult.length == 0) {
        removeProductsFromCart(productsArrayResult);
    } else {
        document.querySelector('.header-navi__cart_sales').innerHTML = productsArrayResult.length;
    }
}

function createPrice() {
    let totalPrice = 0;
    const productsArray = JSON.parse(localStorage.getItem('products')) || [];
    productsArray.forEach(element => {
        totalPrice += element.price * element.count;
    });
    document.querySelector('.shipping-total__sub_select').innerHTML = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(totalPrice);
    document.querySelector('.shipping-total__grand_select').innerHTML = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(totalPrice);
}