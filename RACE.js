let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let runnerAge = 19;
if (runnerAge > 18 && registerEarly) {
  raceNumber +=1000;
}
if (runnerAge > 18 && registerEarly) {
  console.log(`Race will start at 9:30 am. Your race number is ${raceNumber}.`);
}
else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Race will start at 11:00 am. Your race number is ${raceNumber}.`);
}
else if (runnerAge < 18) {
    console.log(`Race will start at 12:30 pm. Your race number is ${raceNumber}.`);
}
else {
    console.log("Please see the registration desk.");
}
