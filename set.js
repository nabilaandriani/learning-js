/* set tidak memiliki key dan indeks ketika menyimpan data. 
Selain itu, data yang disimpan di dalam set akan bernilai unik artinya tidak akan ada data yang duplikat */
const mySet = new Set([1, 2, 3]);
console.log(mySet);

// method add untuk menambahkan nilai set setelah diinisialisasi
const set = new Set();
set.add(1);
set.add(2);
/* Method add hanya menerima satu argument sebagai nilai yang ingin kita tambahkan ke dalam set. 
Jika kita memberikan nilai yang sama, set hanya akan menyimpan sekali saja. 
Oleh karena itu, data yang ada di dalam set tidak akan terduplikat. */
const set = new Set();
set.add(1);
set.add('Apple');
set.add(1);
set.add('Apple');

console.log(set); // Output: Set { 1, 'Apple' }
// hanya satu data yang tersimpan.

//------------------//

// Set memiliki perbedaan untuk cara mengakses nilainya yaitu menggunakan perulangan (looping)
const set = new Set();
set.add(1);
set.add(2);

for (const number of set) {
  console.log(number); // Output: 1, 2
}

// keyword foreach 
const set = new Set();
set.add(1);
set.add(2);

set.forEach((value) => console.log(value)); // Output: 1, 2

//----------------//

// method delete untuk menghapus nilai di set
const set = new Set();
set.add(1);
set.add(2);
set.delete(1);

console.log(set); // Set(1) { 2 }
/* Ingat bahwa set tidak memiliki urutan atau index, 
jadi argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya. */