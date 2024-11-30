// Задачи:
// 1. Найдите элемент по id, используя getElementById, элемент с id равным
// "super_link" и выведите этот элемент в консоль.
const superAnchor = document.getElementById('super_link');
console.log(superAnchor);
console.log('--------------------------------------');
// 2. Внутри всех элементов на странице, которые имеют класс card-link,
// поменяйте текст внутри элемента на "ссылка".
const anchors = document.querySelectorAll('.card-link');
anchors.forEach(element => {
    element.textContent = 'ссылка';
});
// 3. Найдите все элементы на странице с классом card-link, которые лежат в
// элементе с классом card-body, и выведите полученную коллекцию в консоль.
const anchorsBody = document.querySelectorAll('.card-body .card-link');
anchorsBody.forEach(element => {
    console.log(element);
});
console.log('--------------------------------------');
// 4. Найдите первый попавшийся элемент на странице, у которого есть атрибут
// data-number со значением 50, и выведите его в консоль.
console.log(document.querySelector('[data-number = "50"]'));
console.log('--------------------------------------');
// 5. Выведите содержимое тега title в консоль.
const titleTag = document.querySelector('title');
console.log(titleTag.textContent);
console.log('--------------------------------------');
// 6. Получите элемент с классом card-title и выведите его родительский узел в
// консоль.
const cardTitleTag = document.querySelector('.card-title');
console.log(cardTitleTag.parentNode);
console.log(cardTitleTag.parentElement);
console.log('--------------------------------------');
// 7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный
// тег в начало элемента, который имеет класс card.
const newTag = document.createElement('p');
newTag.textContent = 'Привет';
const cardEl = document.querySelector('.card');
cardEl.appendChild(newTag);
cardEl.insertBefore(newTag, cardEl.firstChild);
console.log('--------------------------------------');
// 8. Удалите тег h6 на странице
const hTag = document.getElementsByTagName('h6');
const hTagQS = document.querySelector('h6');
console.log(hTag);
console.log(hTagQS);
hTagQS.remove();