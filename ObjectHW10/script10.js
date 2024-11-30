// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”
const week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
}
console.log(week[2]);
console.log('------------------------------------');
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
const user = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 20,
}
console.log(`${user.name} - ${user.surname} - ${user.age}`);
console.log('------------------------------------');
// 3. Доб1авьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
console.log(user);
// user.superName = prompt('Введите отчество: ');
console.log(user);
console.log('------------------------------------');
// 4. Удалите свойство surname
delete user.surname;
console.log(user);
console.log('------------------------------------');
// Задание 2 (тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.
const weekNewObject = {};
if (arr1.length === arr2.length) {
    for (let index = 0; index < arr1.length; index++) {
        weekNewObject[arr1[index]] = arr2[index];
    }
}
console.log(weekNewObject);
console.log('------------------------------------');
const obj = { x: 1, y: 2, z: 3 };
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.
for (const key in obj) {
    console.log(key + ' ' + obj[key]);
    obj[key] *= obj[key];
}
console.log(obj);
console.log('------------------------------------');
// Задание 3(тайминг 15 минут)
const obj2 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
// Найдите сумму элементов приведенного объекта.
sum = 0;
for (const keyUp in obj2) {
    // console.log(obj2[keyUp]);
    for (const key in obj2[keyUp]) {
        // console.log(obj2[keyUp][key]);
        sum += obj2[keyUp][key];
    }
}
console.log(sum);
console.log('------------------------------------');
// Задание 4 (тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
const riddles = {
    question:'Зимой и летом одним цветом?',
    answer: 'елка',
    askQuestion(){
        let userAnswer = prompt(this.question).toLocaleLowerCase();
        if (userAnswer === this.answer) {
            alert('Вы выиграли');
        } else {
            alert('Вы проиграли');
        }
    } 
};
riddles.askQuestion();
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно