// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
const firstDiv = document.querySelector('#block p:first-child');
console.log(firstDiv);
console.log('--------------------------------------');
// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p> 
const firstParagraph = document.querySelector('.www:first-of-type');
console.log(firstParagraph);
console.log('--------------------------------------');
const firstParagraph2 = document.querySelectorAll('.www');
firstParagraph2.forEach(element => {
    console.log(element);
});
console.log('--------------------------------------');
// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
const anchor = document.querySelector('.link');
console.log(anchor);
anchor.textContent = 'link text js';
// Заменить href, на значение https://developer.mozilla.org/ru/
anchor.href = 'https://developer.mozilla.org/ru/';
anchor.setAttribute('href', '<https://www.example.com>');
console.log('--------------------------------------');
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
const myImage = document.querySelector('.photo');
console.log(myImage);
myImage.src = 'https://cdni.pornpics.com/460/7/745/46727300/46727300_007_e503.jpg';
// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
const contentDiv = document.querySelector('.content');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Новый текстовый элемент 1';
const newParagraphText = document.createTextNode('Еше один текстовый элемент');
contentDiv.appendChild(newParagraph);
contentDiv.appendChild(newParagraphText);
console.log(contentDiv);
// Замените “Новый текстовый элемент”
const newParagraph2 = document.createElement('p');
newParagraph2.textContent = 'Новый текстовый элемент 2';
contentDiv.replaceChild(newParagraph2, newParagraph);
newParagraph2.replaceWith(newParagraph);
console.log(contentDiv);
// Удалите добавленный узел 
contentDiv.removeChild(newParagraphText);
newParagraph.remove();
console.log(contentDiv.outerHTML);
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
const newButton = document.createElement('button');
newButton.textContent = 'Клик';
// contentDiv.appendChild(newParagraph);
contentDiv.appendChild(newButton);
let count = 0;
newButton.onclick = () => {
    count++;
    // console.log('newButton.onclick');
    console.log(count);
}




