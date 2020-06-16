"use strict";

// // *** 1 ***

const categories = document.querySelector('#categories').children.length;
console.log(`В списке ${categories} категории.`);
const liItem = document.querySelectorAll('.item');
liItem.forEach(el => {
  console.log('Категория:', el.querySelector('h2').textContent);
  console.log('Количество элементов:', el.querySelectorAll('li').length);
});

// // *** 2 ***

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ul = document.querySelector('#ingredients');
// ingredients.forEach(function (ingredient) {
//   const li = document.createElement('li');
//   li.innerHTML = ingredient;
//   ul.append(li);
//   console.log(li);
// })

// // *** 3 ***

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector('#gallery')
console.log(ul);

images.forEach(function (image) {
  const li = document.createElement('li');
  ul.insertAdjacentElement("beforeend", li);
  const img = document.createElement('img');
  img.src = `${image.url}`;
  img.alt = `${image.alt}`;
  img.width = 100;

  li.insertAdjacentElement("beforeend", img);
})

// // *** 4 ***

const counterValue = document.querySelector('#value');
let value = 0;
counterValue.textContent = value
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

increment.addEventListener('click', () => counterValue.textContent = value += 1)
decrement.addEventListener('click', () => counterValue.textContent = value -= 1)

// // *** 5 ***

const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value;
  if (nameInput.value === "") {
    nameOutput.textContent = "незнакомец";
  }
});

// // *** 6 *** 

const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', () => {
  if (validationInput.value.length !== +validationInput.dataset.length) {
    validationInput.classList.add('invalid');
  } else {
    validationInput.classList.add('valid');
  }
});

validationInput.addEventListener('focus', () => {
  if (validationInput.classList.contains('invalid')) {
    validationInput.classList.remove('invalid')
  } else {
    validationInput.classList.remove('valid')
  }
});

// // *** 7 ***

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
})