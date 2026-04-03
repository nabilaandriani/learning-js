// global scope (jadi bisa ambil variabel yang diluar function)
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy; 
}
console.log(callMyNightSky())
// block scope
function logVisibleLightWaves(){
  const lightWaves = 'Moonlight'
  console.log(lightWaves)
}
logVisibleLightWaves();
// ini bakal error karena lightwaves itu berada didalam body function jadi harus dipanggil di dalam itu juga
console.log(lightWaves) 
// scope pollution
const satellites = 'The Moon';
const galaxys = 'The Milky Way';
let starss = 'North Star';

const callMyNightSky = () => {
    // karena tidak ada let ini bisa mengakibat kalo kita ingin ubah value variabel star bakal gabisa karena gada let nya
  stars = 'Sirius'
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)
// good scoping
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights'
    console.log(lightWaves)
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
