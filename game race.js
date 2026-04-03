let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)
const registeredEarly = true;
const runnerAge = 18
if (registeredEarly === true && runnerAge >= 18){
  raceNumber += 1000;
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`);
}else if (registeredEarly === false && runnerAge >= 18){
  raceNumber += 1000;
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`)
}else if(registeredEarly === true && runnerAge <= 18){
  raceNumber += 1000;
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}`)
}else if(registeredEarly === false && runnerAge <= 18){
  raceNumber += 1000;
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}`)
}else{
  console.log('See the registration deck')
}


