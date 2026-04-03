function sayThanks(name) {
  console.log('Thank you for your purchase, '+ name + '! We appreciate your business.');
}
sayThanks('Cole')
// 
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
// menghitung
function monitorCount(rows, columns){
  return (rows * columns)
}
const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)
// define a function using function expressions:
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200
}
const totalCost = costOfMonitors(5, 4)
console.log(totalCost)
// we need to water once a week on Wednesdays.
const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
}
console.log(plantNeedsWater('Tuesday'))
// arrow syntax function (tanpa harus ketik function)
const plantNeedsWaters = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
// versi singkat dengan if else (single line)
const plantsNeedsWater = day => day === 'Wednesday' ? true : false;
// multiple line
const myName = name => {
    const call = name * name;
    return call;
}