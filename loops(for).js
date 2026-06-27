// for loops menambahkan (1)
for (let counter = 0; counter < 4; counter++){
  console.log(counter);
}

// for loops mengurangkan (1)
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// ini memakai dolar untuk loop nya
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`)
}

// jika ada string yang sama di variabel yang beda dan mau ambil string yang sama tersebut
// ini kan ada string yang sama yaitu gegen dan nadia
const bobsFollowers = ['nabila', 'cahya', 'gegen', 'nadia'];
const tinasFollowers = ['rara', 'gegen', 'nadia'];
// ini dikosongin karena mau dimasukkan string yang sama itu
const mutualFollowers = [];
// nested loops
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log(mutualFollowers)
// hasilnya [ 'gegen', 'nadia' ]

// while = kalo kita gatau mau sampe berapa kali loop nya berjalan
// while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather, you’ll eat while you’re hungry. 
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
// loop nya akan berhenti jika ada kata spade
while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}
// heart heart heart club heart spade (kata akhir nya spade jadi berhenti loop)

// do while = bakal terus berjalan sampe kondisinya true dan akan berhenti jika false
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;
do {
 cupsAdded++;
  console.log(cupsAdded + ' cup was added')
} while ( cupsAdded < cupsOfSugarNeeded
);
// hasil 1 cup was added 2 cup was added 3 cup was added 4 cup was added

// loop akan berhenti jika menemukan kata yang dicari
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
    // Begitu sampai ke 'Notorious B.I.G.', kondisi if terpenuhi → break → loop berhenti.
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break; // berhenti kalau ketemu Notorious B.I.G.
  }
  console.log(`And if you don't know, now you know ${rapperArray[i]}`)
} 