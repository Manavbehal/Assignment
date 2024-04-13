function findOlderCars(carYears,input) {
    const olderCars = [];
    let olderCarsCount = 0;

    for (let i = 0; i < carYears.length; i++) {
        if (carYears[i] < input) {
            olderCars.push(carYears[i]);
            olderCarsCount++;
        }
    }
  
    return { olderCars, olderCarsCount };
}


module.exports = findOlderCars;