/* Rest operator memungkinkan function untuk menerima argument dalam bentuk array. 
Rest operator yang digunakan pada parameter fungsi sering disebut sebagai Rest Parameter. 
Cara menggunakan rest parameter adalah dengan menambahkan tiga titik (...) sebelum parameter terakhir.  */
function myFunc(...name) {
  console.log('name:', name);
}

myFunc('Rafy', 'Fikri', 'Dimas');

//-------------------//

/* Rest parameter akan menangani argument tersebut menjadi sebuah array dan meneruskannya ke function. 
Jika ada parameter lain sebelumnya, nilainya tidak menjadi bagian dari array yang dihasilkan rest parameter. */
function myFunc(number, ...name) {
  console.log('number', number);
  console.log('name', name);
}

myFunc('one', 'Arsy', 'Aras'); 
/* Output: number one
name [ 'Arsy', 'Aras' ] */

//-------------------//
// method array.length 
function myFunc(...name) {
  console.log(name.length);
  console.log('name', name);
}

myFunc('Adi', 'Nur', 'Arif');
/* 3
name [ 'Adi', 'Nur', 'Arif' ] */

//-------------------//
// destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array
const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]*/
