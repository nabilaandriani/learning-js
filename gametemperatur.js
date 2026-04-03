const kelvin = 283;
console.log(kelvin);
// ubah jadi kelvin ke celcius
let celcius = kelvin - 273
console.log(celcius)
// ubah dari celcius ke fahrenheit
let fahrenheit = celcius * (9/5) + 32
console.log(fahrenheit)
// ini buat membulatkan decimal
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
// ubah celcius ke newton
let newton = celcius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton`)