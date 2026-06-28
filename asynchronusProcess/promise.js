// Promise adalah sebuah objek khusus yang akan menentukan keberhasilan atau kegagalan dari proses asynchronous.
/**
 * Pending: kondisi awal sebuah proses berjalan. Belum ada hasil yang diharapkan.
Fulfilled: kondisi keberhasilan proses dan akan mengembalikan nilai positif. Misalnya mengembalikan isi berkas jika pembacaannya sukses.
Rejected: operasi terjadi kegagalan dan membawa alasan atau data mengenai masalah ini. Biasanya, data kegagalan berupa instance dari class Error.
 */

function onFulfilled(doSomethingData) {
    // Do your jobs when "fulfilled" happens…
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
    // Do your jobs when "rejected" happens…
    console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);
//then adalah method khusus milik objek Promise. Ia yang akan menangani atau menerima hasil dari proses asinkron.
// Method ini menerima dua buah callback, yaitu callback untuk menangani keberhasilan (fulfilled) dan callback untuk menangani kegagalan (rejected).

// do something
function promiseExecutor(resolve, reject) {
    setTimeout(() => {
        console.log('Melakukan sesuatu sebelum Promise diselesaikan.');

        // Penentuan hasil dari proses asinkron
        const number = Math.random();

        // Nilai fulfillment dari Promise
        if (number > 0.5) {
            resolve('You did it!');
        }

        // Nilai rejection dari Promise
        else {
            reject(new Error('Sorry, something went wrong!'));
        }
    }, 2000);
}

function doSomething() {
    return new Promise(promiseExecutor);
}
// Function doSomething akan membuat dan mengembalikan nilai objek Promise

// contoh
function promiseExecutor(resolve, reject) {
    setTimeout(() => {
        console.log('Melakukan sesuatu sebelum Promise diselesaikan.');

        // Penentuan hasil dari proses asinkron
        const number = Math.random();

        // Nilai fulfillment dari Promise
        if (number > 0.5) {
            resolve('You did it!');
        }
        // Nilai rejection dari Promise
        else {
            reject('Sorry, something went wrong!');
        }
    }, 2000);
}

export function doSomething() {
    return new Promise(promiseExecutor);
}

import { doSomething } from './utils.mjs';

function onFulfilled(doSomethingData) {
    // Do your jobs when "fulfilled" happens…
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
    // Do your jobs when "rejected" happens…
    console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);
// hasilnya bisa berbeda beda jika dijalankan berkali kali
/** output jika berhasil
 * Melakukan sesuatu sebelum Promise diselesaikan.
You did it!

output jika gagal
* Melakukan sesuatu sebelum Promise diselesaikan.
Sorry, something went wrong!
 */

// chaining promise
export function makeCoffee(name) {
    return new Promise((resolve, reject) => {
        const estimationTime = 2000;
        let isSuccess = false;

        const inSecond = Math.ceil(estimationTime / 1000);
        console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

        setTimeout(() => {
            const number = Math.random();
            if (number > 0.3) {
                isSuccess = true;
            }

            if (!isSuccess) {
                reject(new Error('Maaf, kopi gagal dibuatkan.'));
                return;
            }

            console.log('Pramusaji selesai membuat kopi.');
            resolve(name);
        }, estimationTime);
    });
}

export function sendCoffee(name) {
    return new Promise((resolve, reject) => {
        const estimationTime = 1000;
        let isSuccess = false;

        console.log('Pramusaji sedang mengantarkan kopi pesanan');

        setTimeout(() => {
            const number = Math.random();
            if (number > 0.1) {
                isSuccess = true;
            }

            if (!isSuccess) {
                reject(new Error('Maaf, kopi gagal diantarkan.'));
                return;
            }

            console.log('Pramusaji sudah sampai ke meja.');
            resolve(name);
        }, estimationTime);
    });
}

import { makeCoffee, sendCoffee } from './coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
    .then(
        (value) => {
            return sendCoffee(value);
        },
        (error) => {
            console.error(error.message);
            throw error;
        },
    )
    .then(
        (value) => {
            console.log(`Pramusaji memberikan ${value} pesanan.`);
            console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
        },
        (error) => {
            console.error(error.message);
            throw error;
        },
    );
/** output
 * Saya memesan Kopi Espresso di kafe.
Mohon menunggu. Pramusaji sedang membuatkan kopi dalam 2 detik
Pramusaji selesai membuat kopi.
Pramusaji sedang mengantarkan kopi pesanan
Pramusaji sudah sampai ke meja.
Pramusaji memberikan Kopi Espresso pesanan.
Saya mendapatkan Kopi Espresso dan menghabiskannya.
 */

// pemanggilan then terjadi dua kali karena masih ada proses berikutnya, yaitu mengirimkan kopi, setelah pembuatan kopi sukses. 
// Penanganan ini disebut dengan chaining method. 
// Ini bisa dilakukan karena method then juga mengembalikan nilai Promise sebetulnya sehingga proses asinkron bisa kita teruskan.

// method catch => seluruh kemungkinan error yang dapat terjadi pada setiap proses akan memasuki method tersebut.
makeCoffee(order)
    .then((value) => {
        return sendCoffee(value);
    })
    .then((value) => {
        console.log(`Pramusaji memberikan ${value} pesanan.`);
        console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    })
    .catch((error) => {
        console.log(error.message);
    });

// method then 
makeCoffee(order)
    .then((value) => { /* Do your jobs... */ })
    .then((value) => { /* Do your jobs... */ })
    .then((value) => { /* Do your jobs... */ })
    .then((value) => { /* Do your jobs... */ })
    .then((value) => { /* Do your jobs... */ })
    .then((value) => { /* Do your jobs... */ })
    .catch((error) => console.log(error.message));

// common problem with promise
makeCoffee(order).then((value) => {
    sendCoffee(value).then((value) => {
        console.log(`Pramusaji memberikan ${value} pesanan.`);
        console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    });
});

// then akan berjalan jika menemukan promise
makeCoffee(order)
    .then((value) => {
        sendCoffee(value); // <-- tidak akan dilanjutkan ke then berikutnya.
    })
    .then((value) => {
        console.log(`Pramusaji memberikan ${value} pesanan.`);
        console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    })
    .catch((error) => {
        console.log(error.message);
        throw error;
    });

// 
makeCoffee(order)
    .then((value) => {
        return sendCoffee(value); // <-- akan dilanjutkan ke then berikutnya.
    })
    .then((value) => {
        console.log(`Pramusaji memberikan ${value} pesanan.`);
        console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    })
    .catch((error) => {
        console.log(error.message);
        throw error;
    });