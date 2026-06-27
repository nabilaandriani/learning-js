/** Try merupakan blok kode yang akan menangani error, 
 * sedangkan catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try. */
try {
  console.log('Memulai program');
  console.log('Mengakhiri program');
} catch (err) {
  console.log('Karena tidak ada error, blok ini akan diabaikan');
}
/** output
 * Memulai program
Mengakhiri program
 */
// Kode tersebut tidak akan mengeksekusi kode di dalam blok catch. 
// Jika ingin blok kode catch dieksekusi, tambahkan error di dalam blok try
try {
  console.log('Memulai program');
  throw new Error('Error: Program berhenti');
  console.log('Mengakhiri program');
} catch (err) {
  console.log('Karena ada error, blok ini akan dieksekusi');
}
/** output
 * Memulai program
Karena ada error, blok ini akan dieksekusi
 */
