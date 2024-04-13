const result = require('../problem5');
const carYears = require('../problem4'); 
let inventory = require('../inventory');

const carYearsData = carYears(inventory);
const input = process.argv[2];
console.log(input);



const { olderCars, olderCarsCount } = result(carYearsData,input);

console.log(olderCars);
console.log(olderCarsCount)

