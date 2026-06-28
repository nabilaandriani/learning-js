/* Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. 
Kalau sama seperti object, lalu apa fungsinya map? Map berfungsi untuk menutupi kekurangan dari object. 
Map dapat menggunakan key dengan tipe data apa pun, tidak seperti object yang hanya menerima string. 
Jadi perbedaan mendasarnya terletak pada key yang digunakan. */
const productMap = new Map([
  ['shoes', 500],
  ['cap', 350],
  ['jeans', 250]
]);

console.log(productMap);

// method map.set menerima dua nilai yang pertama adalah keynya dan yang kedua adalah valuenya.
const map = new Map();
map.set('name', 'aras');
console.log(map); // Map(1) { 'name' => 'aras' }

// Selain menggunakan string sebagai key pada Map, kita juga dapat menggunakan number sebagai key-nya\
const map = new Map();
map.set(1, 'number one');
console.log(map); // Map(1) { 1 => 'number one' }

// methode get untuk dapat mengakses nilainya berdasarkan key tertentu 
// ini berarti mengambil nilai value dari key yang diinput
const map = new Map();
map.set('name', 'aras');
console.log(map.get('name')); // Output: aras 

// methode delete untuk menghapus nilai spesifik berdasarkan key yang kita tentukan.
const map = new Map();
map.set('name', 'aras');
map.set('last name', 'opraza');
map.delete('last name');
console.log(map); // Map(1) { 'name' => 'aras' }
/* Kembalian dari method delete akan bernilai true jika element tersedia atau berhasil dihapus. 
Namun, kembaliannya juga dapat bernilai false jika element yang ingin dihapus tidak ada. */

// array.map fungsinya mengembalikan array baru yang hasilnya adalah nilai dari pemanggilan fungsi pada setiap elemen array asli.
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]