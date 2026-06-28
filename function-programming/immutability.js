// Tujuannya adalah memastikan sebuah nilai tidak dapat diubah dengan mudah (atau bahkan tidak bisa). 
// fungsi yang sering kita gunakan dan harus diperhatikan kembali ketika menerapkan prinsip immutability.
/**
 * Array.push: menambahkan elemen di akhir dari sebuah array.
Array.pop: menghapus elemen terakhir dari sebuah array.
Array.shift: menghapus elemen pertama dari sebuah array.
Array.unshift: menambahkan elemen di awal dari sebuah array.
Array.splice: menambahkan atau menghapus elemen di posisi tertentu dari sebuah array.
Array.reverse: membalikkan urutan elemen dari sebuah array.
Array.sort: mengurutkan elemen dari sebuah array.
Object.assign: memodifikasi properti dari object.
 */

function max(arrayOfNumbers) {
  return arrayOfNumbers
    .sort((a, b) => a - b)
    .pop();
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]
/**
 * karena dalam implementasinya kita menggunakan fungsi sort dan pop, fungsi max jadi memiliki efek samping, yaitu mengubah nilai array numbers yang diberikan melalui argumen. 
 * Efek samping ini mungkin saja tidak terduga karena tujuan fungsi tersebut hanya mengembalikan elemen yang paling besar.
 */

// fungsi Object.assign yang dapat mengubah nilai pada sebuah objek yang sudah terbentuk sebelumnya.
function registerEmail(person, email) {
  return Object.assign(person, { email });
}

const person = {
  name: 'John',
  username: 'johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
//  fungsi registerEmail menambahkan properti email, baik pada personWithEmail maupun person.

//  versi perbaikan dari fungsi max dan registerEmail agar bersifat immutate.
function max(arrayOfNumbers) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
  return [...arrayOfNumbers]
    .sort((a, b) => a - b)
    .pop();
}

function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]

const person = {
  name: 'John',
  username: 'johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

console.log(person); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

//==============================
// fungsi bawaan yang dapat digunakan dan bersifat immutable.

// 1. array map
['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });
// fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
const oldArray = ['Harry', 'Ron', 'Jeff', 'Thomas']
const newArray = oldArray.map((name) => `${name}!`);

console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
console.log(oldArray); // Output: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ]
// Fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan dihasilkan dari kembalian callback function-nya.

// 2. array filter
//  fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.
const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
  .filter((item) => Boolean(item));

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

//contoh lain
// filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.
const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

/**
 * Output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */

// 3. array reduce
//mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja. 
array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
 
// [...] adalah opsional parameter

const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore); // Output: 313

// 4. object freeze
// untuk membekukan objek sehingga tidak dapat diubah setelah dibuat. 
const user = {
  name: 'John',
  email: 'john@dicoding.com',
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = 'doe@dicoding.com';
console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

//  Object.freeze hanya membekukan tingkat pertama dari objek. Jika objek tersebut memiliki properti yang merupakan objek lain, properti tersebut masih dapat diubah. 
function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: 'Bob',
  email: 'bob@dicoding.com',
  preferences: {
    newsletter: true,
    notifications: 'weekly',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = 'Los Angeles';

console.log(complexUser.preferences.address.city); // Output: 'New York'
