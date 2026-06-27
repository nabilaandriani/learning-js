// cara export dan import
// export
const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };

// import
import { name, email, age } from './anotherfile.mjs';

console.log(name);
console.log(email);
console.log(age);

// bisa make bintang jika variabel sangat banyak
import * as variable from './anotherfile.mjs';

console.log(variable.name);
console.log(variable.email);
console.log(variable.age);
// menambahkan as variable (sebagai alias) untuk mengimpor seluruh variable yang berasal dari modul lainnya
// Import alias (as) digunakan untuk mengubah nama dari function/method/variable yang berasal dari modul lain menjadi nama yang kita inginkan.
// Tujuan dari import alias adalah mempermudah ketika kita memiliki nama function/method/variable yang sama di beberapa modul. 

/**
 * import * memungkinkan kita untuk mengimpor seluruh module yang di export. Namun, kekurangannya adalah sulit untuk dibaca karena tidak eksplisit, 
 * sedangkan menggunakan import {} akan menjadi eksplisit sehingga kita bisa tahu apa saja function/method/variable yang ingin di-import.
 */

// =============

// jika ada 2 variabel yang sama di 2 file berbeda
import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';

userFunction();
customerFunction();
// pake as untuk menghindari konflik

// ================
/**
 * Import: Bayangkan Anda sedang memasak di dapur, tetapi Anda kehabisan bahan tertentu. Anda tahu bahwa tetangga Anda memiliki bahan yang Anda butuhkan. Proses "import" ini mirip dengan meminjam bahan dari tetangga. Dalam pemrograman, "import" memungkinkan Anda menggunakan kode atau fungsi yang sudah dibuat oleh orang lain, sehingga Anda tidak perlu membuat semuanya dari awal.
 * Named Import: Ini seperti meminjam barang dan menyebutkan secara spesifik nama barangnya. Misalnya, Anda tahu tetangga Anda punya wajan, jadi, Anda pergi ke rumah tetangga dan mengatakan, "Boleh nggak saya meminjam wajannya?"
 * Default Import: Jika Anda tidak ingin menyebutkan secara spesifik apa yang Anda butuhkan dan hanya ingin meminjam sesuatu yang sering dipakai, Anda bisa mengatakan, "Bolehkah saya pinjam bahan utamanya?" Dalam hal ini, Anda meminjam bahan yang paling umum dipakai dari dapur tetangga tanpa menyebutkan nama tertentu.
 */

