function findLastCar(inventory) {
   const lastCar= inventory[inventory.length-1];
   const { car_make, car_model } = lastCar;

  
    return { car_make, car_model };
}

module.exports = findLastCar;