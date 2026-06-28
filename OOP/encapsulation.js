/**
 * Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. 
 * Menyembunyikan data adalah bagian kunci dari encapsulation.
 */

// property yang ada di dalam instance class bersifat mutable (dapat diubah). tapi ini akan mengakibatkan kerusakan karena nilai nya bisa berubah
class CoffeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.temperature = 90;
  }

  makeCoffe() {
    console.log('Membuat kopi dengan suhu', this.temperature);
  }
}

const coffee = new CoffeMachine(100);
coffee.temperature = 60;

coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60

// untuk menghindari pengubahan nilai makai getter dan setter
// get adalah cara untuk mendapatkan nilai dari property,
// set adalah method untuk menetapkan nilai property.
class CoffeeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this._temperature = 90
  }

  set temperature(temperature) {
    console.log('you are not allowed to change the temperature');
  }

  get temperature() {
    return this._temperature;
  }
}

const coffee = new CoffeeMachine(10);
console.log('Sebelum diubah: ', coffee.temperature);
coffee.temperature = 100;
console.log('Setelah diubah: ', coffee.temperature);
/** output
 * Sebelum diubah:  90
you are not allowed to change the temperature
Setelah diubah:  90
 */

/**Penambahan underscore (_) di variable temperature untuk menandakan bahwa nilai temperature tidak dapat diubah. 
 * Namun, sebenarnya penggunaan tanda underscore tidak benar-benar membuat property temperature tidak dapat diubah, ia masih dapat diubah. 
 * Penggunaan underscore hanyalah code convention yang disepakati oleh komunitas JavaScript. */

// Untuk membuat nilainya benar-benar tidak dapat diubah,
// menggunakan hashtag (#)
class CoffeeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log('you are not allowed to change the temperature');
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}
// menggunakan enclosing class
class CoffeeMachine {
  #temperature = 90; // enclosing class
 
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }
 
  // Kode lainnya disembunyikan
}