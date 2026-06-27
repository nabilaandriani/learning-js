/**
 * Cara pertama yaitu mengubah ekstensi berkas dari .js menjadi mjs
 * cara kedua menambahkan konfigurasi pada level package = 
 * Buka berkas package.json atau jika belum memilikinya, Anda bisa membuatnya terlebih dahulu (dengan menggunakan perintah npm init -y),
 * "type": "module"
 */

// pake ESMmodules di browser
// <script src="./esmodule.js" type="module">
// pake ini jika browser tidak mendukung = <script nomodule src="fallback.js"></script>
// kalo inline = 
<script type="module">
  import App from "./app.js";
  console.log(App);
</script>