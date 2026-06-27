// mengembalikan nilai function dari suatu function
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

/* Output:
20
33
*/

// function disimpan di variabel
function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

/* Output:
8
*/

// Arrow function versi ringkas
// ini dipake jika hanya satu return value
const convertCelsiusToFahrenheitInConciseSyntax = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// Dijadikan sebagai argumen dari parameter 'operation'
function calculate(operation, numA, numB) {
  return operation(numA, numB);
}
 
// Dijadikan sebagai return value
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}