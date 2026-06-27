/** Finally adalah blok kode yang berada di akhir try-catch. 
 * Bilamana catch dieksekusi hanya ketika ada error di dalam blok try, 
 * blok yang ada di finally akan selalu dieksekusi. */

try {
  console.log('Ini try block');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}
//output 
// Ini try block
// Ini finally block
/* Dengan menggunakan finally, ia tidak peduli apakah blok try memiliki error atau tidak.  */

//---------------------//

try {
  console.log('Ini try block');
  throw new Error('Error: Program berhenti');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}
//output 
// Ini try block
// Ini catch block
// Ini finally block
/* ini kalo ada throw error, baru catch nya muncul di output */