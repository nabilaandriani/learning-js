/**
 * Static: tipe nilai diperiksa saat compile.
Dynamic: tipe nilai diperiksa ketika eksekusi (runtime).
 */

//  static type annotations.
const myName: string = 'Flow';

function greet(name: string) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}
// greet (123) => jika pake number maka akan terjadi error
greet('JavaScript');
// jadi harus menggunakan string agar tidak terjadi error

//==========================//
// style guide
const no = 'Semicolon';

const myFavoriteColor = '#112C85';

const myNumber = 3;
console.log(myNumber);

// declaring random to 1
const random = 1;

// if (foo) {
//   foo++;
// }

let a = 5;
let b = 5;
let c = 5;