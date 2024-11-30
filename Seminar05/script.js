const context = document.querySelector('.context');
console.log(context);

console.log(data);
data.forEach(element => {
    // console.log(element);
    // console.log(element.message);
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = element.message;
    context.appendChild(div);
    div.appendChild(img);
});

// console.log(dataArr);
let dataJson = JSON.parse(dataArr);
// console.log(dataJson);
dataJson.message.forEach(element => {
    // console.log(element);
    context.insertAdjacentHTML('beforeend', `<img src = "${element}">`);
})

let url = 'https://jsonplaceholder.typicode.com/users';
async function getData(url) {
    const response = await fetch(url);
    // console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
}
try {
    let myData = await getData(url);
    // console.log(myData);
    myData.forEach(element => {
        context.insertAdjacentHTML('beforeend',
        `<h2>${element.name}</h2>
        <p>${element.email}</p>`)
    })
} catch (error) {
    console.log(error.message);
}