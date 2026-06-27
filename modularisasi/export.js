/**
 * Export adalah keyword yang kita gunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul saat ini. 
 * Export terdiri dari dua jenis, yaitu default export dan named export.
 */

// Default export adalah cara kita untuk mengekspor minimal satu function/method/variable di sebuah modul. 
export default function goodMorning () {
  console.log('Good morning!')
}

import goodMorning from './anotherfile.mjs';
import anotherName from './anotherfile.mjs';

goodMorning();
anotherName();

//==============
// default export
export default function sayHi() {
  console.log('Hai, ini default export dari anotherfile.mjs');
}
// Default export cocok digunakan untuk menghindari conflict ketika mengimpornya karena kita tidak perlu menulis function/method/variable sesuai dengan namanya.

// named export
export function sayGoodBye() {
  console.log('Bye, ini named export dari anotherfile.mjs');
}
// Named export cocok digunakan ketika ingin mengekspor banyak nilai dari satu modul.

// import
import sayHi, { sayGoodBye } from './anotherfile.mjs';

sayHi(); // Hai, ini default export dari anotherfile.mjs
sayGoodBye(); // Bye, ini named export dari anotherfile.mjs