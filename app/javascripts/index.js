import _ from 'underscore';
import { rices, proteins, toppings, sauces } from './ingredients';

const randomSet = (a, numb = 1) => {
  let set = _.sample(a, numb);
  return set;
}

const listify = (set) => {
  return set.join(', ').replace( /,\s([^,]+)$/, ' and $1')
}

const render = () => {
 let protein = randomSet(proteins);
 let rice = randomSet(rices);
 let sauce = randomSet(sauces);
 let topping = listify(randomSet(toppings, 6));
 let order = `<strong class="white">${rice}</strong> bowl with <strong class="white">${protein}</strong>, <strong class="white">${topping}</strong>, plus <strong class="white">${sauce}</strong>.`;
 let html = `<div class="order f3 f2-ns lh-title">${order}</div>`;

 document.getElementById("app").innerHTML = html;
}

export default () => {
 render();
 document.getElementById('generate').addEventListener('click', render)
};