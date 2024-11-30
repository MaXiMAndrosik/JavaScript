// 1. Ко всем элементам, имеющим класс dropdown-item, добавьте еще один класс
// super-dropdown. Используйте методы forEach и querySelectorAll, а
// также свойство classList у элементов.
const itemElements = document.querySelectorAll('.dropdown-item');

itemElements.forEach(element => {
    console.log(element);
    element.classList.add('super-dropdown');
});
console.log('----------------------------');
// 2. У элемента с классом btn необходимо убрать класс btn-secondary, если он
// присутствует у этого элемента, либо добавить, если такого класса у элемента
// не было.
const btnElement = document.querySelector('.btn');
console.log(btnElement);
if (btnElement.classList.contains('btn-secondary')) {
    console.log('элемент с классом btn содержит класс btn-secondary');
    btnElement.classList.remove('btn-secondary');
} else {
    console.log('элемент с классом btn не содержит класс btn-secondary');
    btnElement.classList.add('btn-secondary');
}
console.log('----------------------------');
// 3. Необходимо удалить класс dropdown-menu у элемента, у которого
// присутствует класс menu.
const anyElement = document.querySelector('.menu');
anyElement.classList.remove('dropdown-menu');
console.log(anyElement);
console.log('----------------------------');
// 4. Используя метод insertAdjacentHTML, добавьте после div с классом
// dropdown следующую разметку: <a href="#">link</a>.
const anyDivElement = document.querySelector('.dropdown + div');
console.log(anyDivElement);
// anyDivElement.insertAdjacentHTML('beforebegin', '<a href="#">.dropdown + div insertAdjacentHTML beforebegin</a>');
// anyDivElement.insertAdjacentHTML('afterbegin', '<a href="#">.dropdown + div insertAdjacentHTML afterbegin</a>');
// anyDivElement.insertAdjacentHTML('beforeend', '<a href="#">.dropdown + div insertAdjacentHTML beforeend</a>');
anyDivElement.insertAdjacentHTML('afterend', '<a href="#">.dropdown + div insertAdjacentHTML afterend</a>');
console.log('----------------------------');
// 5. У элемента с id="dropdownMenuButton" замените id на superDropdown.
const menuBtnElement = document.querySelector('#dropdownMenuButton');
menuBtnElement.setAttribute('id', 'superDropdown');
console.log(menuBtnElement);
console.log('----------------------------');
// 6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует
// атрибут aria-labelledby, равный dropdownMenuButton, используя
// dataset.
const ariaElement = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
console.log(ariaElement);
console.log(ariaElement.dataset);
ariaElement.dataset.dd = '3';
console.log(ariaElement);
console.log('----------------------------');
// 7. Удалите атрибут type у элемента с классом dropdown-toggle
const toggleElement = document.querySelector('.dropdown-toggle');
toggleElement.removeAttribute('type');
console.log(toggleElement);