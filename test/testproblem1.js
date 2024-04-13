const result = require('../problem1'); 
let inventory = require('../inventory');


const findCarById = result(inventory, 33);

if (findCarById) {
    console.log(`Car 33 is a ${findCarById.car_year} ${findCarById.car_make} ${findCarById.car_model}`);
} else {
    console.log("Car with ID 33 not found");
}
