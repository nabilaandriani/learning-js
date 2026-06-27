/* Break statement adalah cara kita untuk memberitahukan interpreter yang sedang mengeksekusi kode 
untuk berhenti dan langsung berpindah ke akhir dari percabangan atau perulangan. */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
/** output
 * 0
1
2
3
4
 */
// jika ketemu angka 5 maka angka 5 tidak muncul dan berhenti di angka 4