// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.container'));

// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = "Item 11";
// ul.children[0].innerText = "Item 11";
// console.log(ul);

//console.log(document.querySelectorAll('.item')); // select all single elements

// This function help us to remove variables if it is declare already
// ul.remove(); 


// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// const ul = document.querySelector('.items');
//ul.remove(); // ul will desappear from the screen. It will remove by js
// ul.lastElementChild.remove(); // last will be deleted.
// ul.lastElementChild.remove(); // now from remaining 4th will be deleted.
// ul.lastElementChild.remove(); // now from three last or third will be deleted.
// ul.lastElementChild.remove(); // now second will be deleted.


// Select the items and finally change them.
// ul.firstElementChild.textContent = "Item 11";
// ul.children[1].innerText = "Item 12";
// ul.children[2].innerText = "Item 13";
// ul.children[3].innerText = "Item 14";
// ul.lastElementChild.textContent = "Item 15";

let btn = document.querySelector('.btn');
btn.style.background = 'blue';
let red = document.querySelector("h1").style.color="red";
let red2 = document.querySelector(".red").style.color="red";

// btn.addEventListener('click', e =>{
//     console.log('Click');
//     e.preventDefault();
// });

// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e=>{
//     document.querySelector('.container').append(nameInput.value);
// });

let myform = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let msg = document.querySelector('.msg');
let userList = document.querySelector('#users');
let button = document.querySelector(".btn");

function onSubmit(e) {
    e.preventDefault();
}
console.log(nameInput.value);
console.log(emailInput.value);

myform.addEventListener('submit', onSubmit);

button.addEventListener('click', e=>{
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields";
        setTimeout(() => {
            msg.remove();
        }, 3000);
    }
    else {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput. value = '';
    }    
});

// myform.addEventListener('submit', onSubmit)
// if (nameInput.value === '' || emailInput.value === '') {
//     msg.classList.add('error');
//     msg.innerHTML = "Please enter all fields";
//     setTimeout(() => {
//         msg.remove();
//     }, 3000);
// }
// else {
//     console.log('Success');
// }

