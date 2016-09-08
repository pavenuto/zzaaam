import _ from 'underscore';

let rices = [
  'White Rice',
  'Brown Rice'
];

let proteins = [
  'Beef',
  'Chicken',
  'Spicy Chicken',
  'Spicy Pork',
  'Pork Belly',
  'Tofu'
];

let toppings = [
  'Lettuce',
  'Corn',
  'Bean Sprouts',
  'Pickled Radish',
  'Pickled Cucumber',
  'Roasted Carrots',
  'Black Beans',
  'Edamame',
  'Kim-Chee',
  'Roasted Onion',
  'Cheese',
  'Seaweed'
];

let sauces = [
  'Ginger Sauce (Mild)',
  'Teriyaki Sauce (Mild)',
  'Creamy Chili Sauce (Mild)',
  'Bull Sauce (Mild)',
  'Spicy Teriyaki Sauce (Hot)',
  'Korean Taco Sauce (Hot)',
  'Z-Kick Sauce (Very Hot)',
  'Angry Bull Sauce (Very Hot)'
];


const random = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}

const randomSet = (a, numb = 1) => {
  let set = _.sample(a, numb);
  return set.join(', ').replace( /,\s([^,]+)$/, ' and $1')   // convert into english
}


const render = () => {
 let protein = random(proteins);
 let rice = random(rices);
 let sauce = random(sauces);
 let topping = randomSet(toppings, 6);
 let order = `<strong class="white">${rice}</strong> bowl with <strong class="white">${protein}</strong>, <strong class="white">${topping}</strong>, plus <strong class="white">${sauce}</strong>.`;
 let html = `<div class="order f3 f2-ns lh-title">${order}</div>`;

 document.getElementById("app").innerHTML = html;
}


export default () => {
 render();
 document.getElementById('generate').addEventListener('click', render)
};