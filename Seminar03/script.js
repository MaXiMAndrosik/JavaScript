// Задание 1 
// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
console.log('Task1');
function loadСompleted() { console.log('страница загрузилась') };
function click() { console.log('событие onclick') };
document.addEventListener('DOMContentLoaded', loadСompleted);
window.addEventListener('load', function (event) { console.log('все загрузилось') });
document.querySelector('.btn').addEventListener('click', click);
console.log('-----------------------------------------')
// Задание 2 
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
console.log('Task2');
const buttonEls = document.querySelectorAll('.btn2');
let count = 0;
function countClicks() {
    count++;
    console.log(count);
}
buttonEls.forEach(btn => {
    btn.addEventListener('click', function (event) {
        console.log(event.target);
    });
});
document.querySelector('.btn3').addEventListener('click', countClicks);
document.querySelector('.btn4').addEventListener('click', function (event) {
    event.target.textContent = 'Вы нажали на эту кнопку';
});
console.log('-----------------------------------------');
// Задание 3 
// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
console.log('Task3');
const title = document.createElement('h1');
title.textContent = 'Новый заголовок';
document.querySelector('.button1').addEventListener('click', function (event) {
    event.target.parentElement.appendChild(title);
});
document.querySelector('.button2').addEventListener('click', function (event) {
    if (event.target.parentElement.contains(title)) {
        event.target.parentElement.removeChild(title);
    }
});
const button3 = document.querySelector('.button3');
button3.addEventListener('mouseover', function () {console.log('Вы навели на данную кнопку');});
button3.addEventListener('mouseout', function () {console.log('Наведения на кнопку больше нет');});
console.log('-----------------------------------------')
// Задание 4 
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
console.log('Task4');
const list = document.querySelector('.list');
document.querySelector('.button4').addEventListener('click', function (event) {
    const listItem = document.createElement('li');
    listItem.textContent = 'новый элемент списка';
    list.appendChild(listItem);
});
document.querySelector('.button5').addEventListener('click', function (event) {
    console.log('Нажата кнопка удалить');
    list.removeChild(list.firstChild);
});
document.querySelector('.button6').addEventListener('click', function (event) {
    event.target.classList.add('click');
});
console.log('-----------------------------------------')
// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
console.log('Task5');
const content = document.querySelector('.content');
const newBtn = document.createElement('button');
newBtn.textContent = 'Отправить';
content.appendChild(newBtn);
newBtn.addEventListener('click', function () {
    newBtn.textContent = 'Текст отправлен';
});


