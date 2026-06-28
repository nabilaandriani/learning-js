const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
// kode di atas bersifat imperatif, yakni untuk mencapai suatu tujuan, kita perlu menulis instruksi yang sifatnya langkah demi langkah

// gaya deklaratif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// impure function
let value = 0;

function addWith(addingValue) {
    value += addingValue;
    console.log(`Current value is ${value}`);
    return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3
// Fungsi addWith dikategorikan sebagai impure karena sifat pure function tidak terpenuhi.

// pure function
function addWith(value, addingValue) {
    return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`); // Output: result1 is 1

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`); // Output: result2 is 2

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`); // Output: result3 is 3

console.log(result1, result2, result3); // Output: 1, 2, 3
//  fungsi addWith menjadi pure function karena seluruh sifatnya telah terpenuhi.

// =====================
// contoh impure
// Mengubah nilai variabel global
let count = 0;
function increment() {
    count++;
}

// Mengakses waktu sistem
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
    user.name = "Updated Name";
}

// Menulis ke berkas
const fs = require('fs');

function writeToFile(data) {
    fs.writeFileSync('data.txt', data);
}

// contoh pure
// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

// Memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsernames(users) {
    return users
        .filter(user => user.isActive)
        .map(user => user.username);
}

// Membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
            street: address.street,
            city: address.city,
            country: address.country
        }
    };
}

// Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings
    };
}

/**
 * Keuntungan menggunakan pure function termasuk kemampuan untuk mengoptimalkan kode melalui memoization, 
 * yakni hasil dari fungsi disimpan dan digunakan kembali jika input yang sama ditemukan.
 */