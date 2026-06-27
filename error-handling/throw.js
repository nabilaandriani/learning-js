// untuk membuat exception adalah menggunakan keyword throw untuk generate sebuah error. 

// standar error
const error = new Error('Terjadi error');
console.error(error);

// throw error
const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error('Pembayaran kurang');
}
/** output
 * /home/glot/main.js:5
  throw new Error('Pembayaran kurang');
  ^

Error: Pembayaran kurang
    at Object.<anonymous> (/home/glot/main.js:5:9)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.15.1
 */

