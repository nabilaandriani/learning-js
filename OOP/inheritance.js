//  inheritance memungkinkan class untuk mewarisi property dan method yang dimilikinya sehingga membantu mengurangi penulisan kode secara berulang
// superclass = Class yang mewariskan property dan method-nya
// subclass = Class yang mewarisi property dan method dari class lain
class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log('iOS have a behavior AirDrop');
  }
}

class Android extends SmartPhones {
  splitScreen() {
    console.log('Android have a Split Screen');
  }
}

const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop

android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen

// ================= //
/**
 * Instanceof dapat digunakan untuk menguji apakah suatu object merupakan instance dari sebuah class atau constructor function tertentu. 
 * Nilai keluaran dari instanceof adalah boolean. 
 * Jika object tersebut merupakan instance dari kelas yang diuji, nilainya akan true. 
 * Jika tidak, nilainya akan false.
 */
class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log('iOS have a behavior AirDrop');
  }
}

class Android extends SmartPhones {
  splitScreen() {
    console.log('Android have a Split Screen');
  }
}

const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');

console.log(ios instanceof SmartPhones); // Output: true
console.log(android instanceof SmartPhones); // Output: true

// Secara sederhana, iOS dan Android memiliki rantai prototype dengan SmartPhones.