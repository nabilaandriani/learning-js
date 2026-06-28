// set time out
const estimationTime = 10_000;

setTimeout(() => {
  console.log('Hello, world!');
}, estimationTime);

/* Output:
Hello, world!
*/
//
export function makeCoffee() {
  // 1000 milidetik = 1 detik
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    // Do some tasks to make coffee...
    console.log('Pramusaji selesai membuat kopi.');
  }, estimationTime);
}

import { makeCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee();

console.log('Pramusaji memberikan kopi pesanan.');
console.log('Saya mendapatkan kopi dan menghabiskannya.');
/** output
 * Saya memesan kopi di kafe.
Mohon menunggu. Pramusaji sedang membuatkan kopi dalam 5 detik
Pramusaji memberikan kopi pesanan.
Saya mendapatkan kopi dan menghabiskannya.
Pramusaji selesai membuat kopi.
 */