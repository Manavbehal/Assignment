function findOlderCars(carYears) {
    const olderCars = [];
    let olderCarsCount = 0;

    for (let i = 0; i < carYears.length; i++) {
        if (carYears[i] < 2000) {
            olderCars.push(carYears[i]);
            olderCarsCount++;
        }
    }
  
    return { olderCars, olderCarsCount };
}


module.exports = findOlderCars;