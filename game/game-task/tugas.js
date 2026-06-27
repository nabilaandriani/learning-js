// objek mobil
const mobil = {
  merk: "Toyota",
  warna: "Hitam",
  jalan: function() {
    console.log(`Mobil ${this.merk} berwarna ${this.warna} sedang berjalan...`);
  }
};

mobil.jalan();

// 2. mahasiswa dan instance nya
class Mahasiswa {
  constructor(nama, jurusan) {
    this.nama = nama;
    this.jurusan = jurusan;
  }

  perkenalan() {
    console.log(`Halo, nama saya ${this.nama} dari jurusan ${this.jurusan}.`);
  }
}

const mhs1 = new Mahasiswa("Budi", "Informatika");
const mhs2 = new Mahasiswa("Siti", "Sistem Informasi");

mhs1.perkenalan();
mhs2.perkenalan();

// hitung total belanja
function hitungTotalBelanja(harga, pajak, diskon) {
  // Tambahkan pajak (misal: pajak dalam bentuk angka desimal seperti 0.1 untuk 10%)
  let totalSetelahPajak = harga + (harga * pajak);
  
  // Kurangi diskon
  let totalAkhir = totalSetelahPajak - diskon;
  
  return totalAkhir;
}

// Contoh penggunaan:
// Harga 100.000, Pajak 10% (0.1), Diskon 5.000
const total = hitungTotalBelanja(100000, 0.1, 5000);
console.log("Total Akhir Belanja: Rp " + total);