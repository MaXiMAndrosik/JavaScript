// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)
const divElement = document.querySelector('.block');
const itemElement = document.createElement('div');
divElement.appendChild(itemElement);
itemElement.textContent = 'Элемент внутри';
itemElement.style.color = 'darkblue';
itemElement.style.border = 'solid black';
itemElement.style.backgroundColor = '#f8f8f8';
itemElement.style.padding = '16px';
itemElement.setAttribute('class', 'item_1');
console.log('--------------------------------');
// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem
const pElement = document.querySelector('.text');
console.log(pElement.parentElement); // Вывести в консоль родительский элемент content
console.log(pElement.parentNode); // Вывести в консоль родительский элемент content
console.log(pElement.parentElement.childNodes); // NodeList(5) [text, h2.heading, text, p.text, text]
console.log(pElement.parentElement.children); // HTMLCollection(2) [h2.heading, p.text]
console.log(pElement.parentNode.childNodes); // NodeList(5) [text, h2.heading, text, p.text, text]
console.log(pElement.parentNode.children); // HTMLCollection(2) [h2.heading, p.text]
console.log(pElement.previousElementSibling); // Вывести в консоль соседний элемент h2
console.log(pElement.nextElementSibling); // Вывести в консоль следующий элемент 
console.log(pElement.parentNode.previousSibling); // #text
console.log(pElement.parentNode.previousElementSibling); // <img src="photo.png" alt="photo">
console.log(pElement.parentNode.nextElementSibling); // null
console.log(pElement.parentElement.previousElementSibling); // <img src="photo.png" alt="photo">
console.log(pElement.parentElement.nextElementSibling); // null
console.log(pElement.parentElement.parentElement); // Вывести в консоль родительский элемент elem
console.log(pElement.parentNode.parentElement); // Вывести в консоль родительский элемент elem
console.log(pElement.parentNode.parentNode); // Вывести в консоль родительский элемент elem
console.log('--------------------------------');
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
let h2El = document.querySelector('.subtitle');
console.log(h2El);
while (h2El.parentElement) {
    console.log(h2El.parentElement);
    h2El = h2El.parentElement;
}
console.log('--------------------------------');
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным
const btn = document.querySelector('.btn');
console.log(btn);
const content = document.createElement('h2');
console.log(document.querySelector('input').value);
btn.onclick = () => {
    if (document.querySelector('input').value) {
        console.log(document.querySelector('input').value);
    } else {
        btn.parentElement.appendChild(content);
        content.textContent = 'вы не заполнили поле ввода';
        document.querySelector('input').style.border = '1px solid red';
    }
}
console.log('--------------------------------');
// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
const content2 = document.querySelector('.content_btn');
const newBtn = document.createElement('button');
newBtn.textContent = 'Отправить';
content2.appendChild(newBtn);4
newBtn.onclick = () => {
    newBtn.textContent = 'Текст отправлен';
}







