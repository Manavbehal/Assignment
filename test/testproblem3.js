const result = require('../problem3'); 
let inventory = require('../inventory');

const sortedInventory = result(inventory);

for (let i = 0; i < sortedInventory.length; i++) {
    console.log(sortedInventory[i].car_model);
}
