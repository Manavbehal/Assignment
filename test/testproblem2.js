const result = require('../problem2'); 
let inventory = require('../inventory');

const findLastCar = result(inventory);

if (findLastCar) {
    console.log(`Last car is a ${findLastCar.car_make} ,${findLastCar.car_model}`);
} else {
    console.log("Car not found");
}
