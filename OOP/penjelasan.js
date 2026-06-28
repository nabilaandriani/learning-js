/**
 * Object terdiri dari atribut informasi (property) dan perilaku (method). 
 * Property adalah informasi tentang objek tersebut seperti nama, warna, dan jenis, 
 * sedangkan method adalah aksi atau perilaku yang dapat dilakukan oleh objek seperti berjalan, berlari, dan terbang. 
 * Object adalah bentuk nyata dari suatu entitas, 
 * sedangkan class adalah cetak biru (blueprint), cetakan atau template yang dapat kita gunakan berulang kali untuk membuat object
 */

// es6 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Membuat instance dari Person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob

person1.eat(); // Output: Alice is eating
person2.eat(); // Output: Bob is eating