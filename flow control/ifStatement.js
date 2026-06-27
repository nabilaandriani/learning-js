/** If statement merupakan fundamental statement yang memungkinkan JavaScript untuk membuat keputusan apakah mengeksekusi program atau tidak. 
 * If statement akan mengeksekusi blok jika kondisi terpenuhi (true). Jika kondisi belum terpenuhi (false), kode tidak akan dieksekusi.
*/
const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('Makan di restoran mal');
}
console.log('Pulang ke rumah');

// contoh lainnya
const score = 80;

if (score >= 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

//-------------//

//ternary operator
/**
 * Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
 * Ekspresi yang dieksekusi jika kondisinya benar.
 * Ekspresi yang dieksekusi jika kondisi salah.
 */
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);
// output : Anda mendapatkan discount sebesar 10000

