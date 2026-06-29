/** ada 3 kategori untuk aturan penulisan di eslint
 * “off” atau 0: aturan tersebut tidak dipermasalahkan atau dimatikan.
“warn” atau 1: aturan ditetapkan sebagai peringatan saja saat dilanggar.
“error” atau 2: aturan wajib dipatuhi dan program dapat mengalami error.
 */
// bentuk penulisan kodenya
// {
//   rules: {
//     "no-duplicate-imports": "off", => Semua module dapat diimpor dengan lebih dari satu perintah import.
//     "no-use-before-define": "error", => Penggunaan unit (variabel, function, dsb.) harus dilalui oleh proses deklarasi.
//     "constructor-super": "error", => constructor function dari class turunan (child class) harus selalu dipanggil jika function tersebut dideklarasi.
//     "no-var": "warn", => Penggunaan keyword const dan let lebih disarankan daripada var.
//     "no-unreachable": "warn", => Kode yang dipastikan tidak dapat dicapai oleh mesin akan memunculkan pesan peringatan.
//     "no-extra-boolean-cast": "warn" => Tidak ada pengonversian tipe boolean yang mubazir.
//   }
// }
