// export variabel
export const favoriteFood = ['pizza', 'pasta', 'sushi'];
// import variabel
import { name, favoriteFood } from './module.mjs';
// ini kalo pake named import
import { name, favoriteFood as food } from './module.mjs';

// ============ //

// export function
export function sayHi(name) {
 console.log(`Hi, ${name}!`);
}
// import function
import { name, favoriteFood as food, sayHi } from './module.mjs';
 
console.log(name);
console.log(food);
sayHi(name);
// pake * agar bisa import seluruh nilai
import * as user from './module.mjs';
 
console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);

// ============== //

// ini agar gaperlu kasih export di tiap nilai
const name = 'John';
const favoriteFood = ['pizza', 'pasta', 'sushi'];
 
function sayHi(name) {
  console.log(`Hi, ${name}!`);
}
 
export { name, favoriteFood, sayHi };