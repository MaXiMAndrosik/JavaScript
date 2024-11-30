// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
const formElement = document.querySelector('.checkbox');
const inputElement = formElement.querySelector('.input');
const divElement = document.createElement('div');
const buttonElement = formElement.querySelector('button');

buttonElement.addEventListener('click', function (e) {
    if (inputElement.checked) {
        console.log('Согласен с условиями');
        formElement.removeChild(divElement);
    } else {
        divElement.textContent = 'Необходимо согласиться с условиями';
        formElement.insertBefore(divElement, inputElement);
    }
});

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const form2Element = document.querySelector('.radiobuttons');
const radioInputs = form2Element.querySelectorAll('.radio_input');
const buttonForm2Element = form2Element.querySelector('button');

buttonForm2Element.addEventListener('click', function (e) {
    radioInputs.forEach(element => {
        if (element.checked) {
            console.log(`${element.nextElementSibling.textContent} закончился`);
        }
    });
});

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const form3Element = document.querySelector('.password');
const inputPassElement = form3Element.querySelector('.passwordInput');
const buttonForm3Element = form3Element.querySelector('button');
const h2Element = document.createElement('h2');
h2Element.textContent = 'пароль неверный';

buttonForm3Element.addEventListener('click', function (event) {
    console.log(inputPassElement.value);

    if (inputPassElement.value === 'пароль') {
        form3Element.removeChild(h2Element);
    } else {
        form3Element.insertBefore(h2Element, inputPassElement);
    }
})
inputPassElement.addEventListener('input', function (e) {
    console.log(inputPassElement.value);
    if (inputPassElement.value === 'пароль') {
        inputPassElement.style.border = '1px solid green';
    } else {
        inputPassElement.style.border = '1px solid red';
    }
})

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const form4Element = document.querySelector('.repeat__form');
const inputTextElement = form4Element.querySelector('.textInput');
const h1Element = form4Element.querySelector('.repeat');

console.log(inputTextElement);
inputTextElement.addEventListener('input', function (event) {
    h1Element.textContent = inputTextElement.value;
    
})





