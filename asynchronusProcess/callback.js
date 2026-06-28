// Callback adalah sebuah function yang dijadikan sebagai nilai argument bagi function yang lain
// Contoh callback yang pernah kita temui sebelumnya adalah memberikan function pada setTimeout dalam parameter pertama. 
// Setelah mencapai nilai timeout, callback akan dibangkitkan atau dijalankan.

// implementasi callback dalam menangani proses asinkron
export function makeCoffee(callback) {
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    // Do some tasks to make coffee...
    console.log('Pramusaji selesai membuat kopi.');

    callback();
  }, estimationTime);
}

import { makeCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee(() => {
  console.log('Pramusaji memberikan kopi pesanan.');
  console.log('Saya mendapatkan kopi dan menghabiskannya.');
});
/** output
 * Saya memesan kopi di kafe.
Mohon menunggu. Pramusaji sedang membuatkan kopi dalam 5 detik
Pramusaji selesai membuat kopi.
Pramusaji memberikan kopi pesanan.
Saya mendapatkan kopi dan menghabiskannya.
 */

// contoh lain
export function makeCoffee(callback) {
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    // Do some tasks to make coffee...

    console.log('Pramusaji selesai membuat kopi.');
    callback();
  }, estimationTime);
}

export function sendCoffee(callback) {
  const estimationTime = 2000;

  console.log('Pramusaji sedang mengantarkan kopi pesanan');

  setTimeout(() => {
    // Do some tasks to send coffee...

    console.log('Pramusaji sudah sampai ke meja.');
    callback();
  }, estimationTime);
}

import { makeCoffee, sendCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee(() => {
  sendCoffee(() => {
    console.log('Pramusaji memberikan kopi pesanan.');
    console.log('Saya mendapatkan kopi dan menghabiskannya.');
  });
});
/** output
 * Saya memesan kopi di kafe.
Mohon menunggu. Pramusaji sedang membuatkan kopi dalam 5 detik
Pramusaji selesai membuat kopi.
Pramusaji sedang mengantarkan kopi pesanan
Pramusaji sudah sampai ke meja.
Pramusaji memberikan kopi pesanan.
Saya mendapatkan kopi dan menghabiskannya.
 */

//================= jika ada error ======================//
export function makeCoffee(name, callback) {
  const estimationTime = 5000;
  let isSuccess = false;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    // Penentuan hasil dari proses asinkron
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error('Gagal membuatkan kopi.'), null);
      return;
    }

    console.log('Pramusaji selesai membuat kopi.');
    callback(null, name);
  }, estimationTime);
}

export function sendCoffee(name, callback) {
  const estimationTime = 2000;
  let isSuccess = false;

  console.log('Pramusaji sedang mengantarkan kopi pesanan');

  setTimeout(() => {
    // Penentuan hasil dari proses asinkron
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }

    if (!isSuccess) {
      callback(new Error('Gagal mengantarkan kopi.'), null);
      return;
    }

    console.log('Pramusaji sudah sampai ke meja.');
    callback(null, name);
  }, estimationTime);
}

import { makeCoffee, sendCoffee } from './coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    // Do something with error
    console.error(makeCoffeeError);
    return;
  }

  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      // Do something with error
      console.error(sendCoffeeError);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
  });
});

// penerapan callback pada proses asynchronous dengan memanfaatkan salah satu Node.js API, yaitu fs untuk membaca file system.
import { readFile } from 'fs';

readFile('./sample.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data.toString()
    .replace('%name%', 'Dicoding')
    .replace('%your_name%', 'JavaScript');

  console.log(greeting);
})
// output = Hello Dicoding, my name is JavaScript.
// output yang kalo ga pake replace = Hello %name%, my name is %your_name%.
