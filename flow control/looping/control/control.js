/** alih-alih menghentikan eksekusi program, continue akan melanjutkan iterasi ke iterasi berikutnya.
 *  Continue statement hanya dapat digunakan di dalam body looping.  */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
      continue;
  }
  console.log(i);
}

/** output
 * 0
1
2
3
4
6
7
8
9
 */
// jika ketemu angka 5 maka ga muncul di output namun angka nya tetap lanjut