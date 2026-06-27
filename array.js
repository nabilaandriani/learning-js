// update array (mengubah salah satu index di array)
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'
console.log(groceryList)

// mengubah index menggunakan let dan const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo'
console.log(condiments)
condiments = ['Mayo']
console.log(condiments)
    // ternyata const bisa diubah index element nya dan bisa dipanggil variabel nya
    // you can mutate an array saved to a variable declared with const but you cannot reassign the variable.
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
// ini tuh ganti spork jadi spoon
utensils[3] = 'Spoon'
console.log(utensils)

// menghitung banyak nya elemen di array
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

// metode push yaitu menambahkan elemen di akhir index array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('mop the floor', 'clean the table')
console.log(chores)

// metode pop yaitu menghapus elemen di akhir index array
const choress = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop()
console.log(chores)

// metode shift yaitu menghapus elemen di awal index array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift()
console.log(groceryList)

// metode unshift yaitu menambahkan elemen di awal index array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.unshift('popcorn')
console.log(groceryList)

// metode slice yaitu memanggil beberapa index sesuai keinginan
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// maksud dari 1 = dimulai dari index 1
// maksud dari 4 = dia berarti kurang dari index 4
// jadi hasilnya 'bananas', 'coffee beans', and 'brown rice'.
// slice ini ga akan mengubah array awal atau array yang diubah oleh shift unshift
// .slice() will not mutate the array it was called onl
console.log(groceryList.slice(1, 4))

// metode indexOf yaitu menghitung index ke berapa elemen tersebut
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)
// hasilnya pasta ada di index ke 4

// ini ubahnya dengan function
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

function removeElement(newArr){
  newArr.pop()
}
removeElement(concept)
console.log(concept)

// metode nested array = memanggil index di element
const numberClusters = [[1, 2], [3, 4], [5, 6]]
// jadi 2 itu maksudnya index ke 2 dari numberClusters
// kalo 1 itu maksudnya index ke 1 dari element 3 -> (5,6) berarti index 1 itu 6
const target = numberClusters[2][1]
console.log(target)

// metode splice = menghapus beberapa index string dan ganti jadi string baru
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// jadi 6 itu mengambil urutan index ke 6
// kalo 5 itu itungan index ke berapa sampai ke berapa
// contoh index 6 = get , nah nanti dari get itung 5 langkah/index , kalo 5 index dari get, easily, the, first, time
// atau lebih jelasny = dari index 6 ('get') lalu diitung selanjutnya kurang dari 5 index (sebelum 'it')
// nah nanti setelah itu index nya akan diganti ke string baru
secretMessage.splice([6], [5], 'know, ')
console.log(secretMessage)

/*pada array dapat dihapus menggunakan keyword delete. 
Untuk menghapus data yang diinginkan, kita perlu mengetahui nilai indeksnya terlebih dahulu */
let myArray = ['Android', 'Data Science', 'Web'];
delete myArray[1];

console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']

// metode join = untuk menjadikan array dalam bentuk kalimat
let secretMessages = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// gunanya (' ') itu agar memisahkan tiap kata dengan spasi, kalo tidak pake itu maka akan dikasih koma bukan spasi
console.log(secretMessage.join(' '))

/* Array.from merupakan method untuk membuat array yang diperkenalkan di ES6. */
const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o'] 

// Array.from juga dapat dimanfaatkan untuk menyalin array lainnya
const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

/* Destructuring digunakan untuk melihat isi dari array. 
Destructuring cukup mudah dilakukan yaitu dengan menggunakan kurung siku yang di dalamnya adalah nama variabel yang kita assign. 
Kemudian diikuti dengan assignment operator sama dengan (=) dan array yang ingin diambil nilainya.*/
const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello

/* Sort adalah method yang digunakan untuk mengurutkan nilai array. 
Array akan diurutkan berdasarkan abjad */
const myArray = ['Web', 'Android', 'Data Science'];
myArray.sort();
console.log(myArray); // Output: [ 'Android', 'Data Science', 'Web' ]