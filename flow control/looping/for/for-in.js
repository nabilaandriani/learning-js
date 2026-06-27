/**
 * For in banyak digunakan untuk pengulangan pada object karena ia dapat melakukan iterasi ke seluruh data di dalam objek. 
 * Bahkan, ia juga dapat melakukan iterasi ke properti inheritance dari object seperti length.
 */

const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

//output 
// name bernilai Fulan
// origin bernilai Bandung
// birthYear bernilai 2024
/* ini berarti mengambil key dan valuenya */