// 1. При изменении значения в <input> с id="from", значение, содержащееся
// в нем, должно моментально отображаться в <span>.
// ○ Это значит, что при каждом изменении текста в инпуте, текст в <span>
// должен обновляться соответственно.
const repeatInput = document.querySelector('#from');
const spanElement = document.querySelector('span');
repeatInput.addEventListener('input', function (event) {
    spanElement.textContent = repeatInput.value;
})
// 2. При клике на кнопку с классом messageBtn необходимо выполнить
// следующие действия для элемента с классом message:
// ○ Добавить два класса: animate_animated и animate_fadeInLeftBig.
// ○ Установить стиль visibility в значение 'visible'.
const messageBtnElement = document.querySelector('.messageBtn');
const divElement = document.querySelector('.message');
messageBtnElement.addEventListener('click', function (e) {
    divElement.classList.add('animate_animated', 'animate_fadeInLeftBig');
    divElement.style.visibility = 'visible';
})
// 3. При отправке формы проверьте, заполнены ли все поля.
// ○ Если какое-либо поле не заполнено, форма не должна отправляться.
// ○ Незаполненные поля должны быть подсвечены (добавлен класс error).
// ○ Как только пользователь начинает заполнять поле, выполните проверку:
// ■ Если поле пустое, подсветите его (добавьте класс error).
// ■ Если поле заполнено, уберите подсветку (удалите класс error).

const form = document.querySelector('form');
const inputElements = form.querySelectorAll('.form-control');
const subButton = form.querySelector('button');
inputElements.forEach(element => {
    element.addEventListener('input', function (event) {
        if (element.value.trim() === '') {
            element.classList.add('error');
        } else {
            element.classList.remove('error');
        }
    })
});
form.addEventListener('submit', function (event) {
    inputElements.forEach(element => {
        if (element.value === '') {
            element.classList.add('error');
            event.preventDefault();
        }
    });
})


