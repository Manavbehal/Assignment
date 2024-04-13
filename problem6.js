function filterBMWAndAudi(inventory) {
    const BMWAndAudi = [];

    for (let i = 0; i < inventory.length; i++) {
        const car = inventory[i];
        if (['BMW', 'Audi'].includes(car.car_make)) {
            BMWAndAudi.push(car);
        }
    }

    return BMWAndAudi;
}

module.exports = filterBMWAndAudi;