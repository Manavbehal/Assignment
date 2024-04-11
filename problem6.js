function filterBMWAndAudi(inventory) {
    const BMWAndAudi = [];

    for (let i = 0; i < inventory.length; i++) {
        const car = inventory[i];
        if (car.car_make === 'BMW' || car.car_make === 'Audi') {
            BMWAndAudi.push(car);
        }
    }

    return BMWAndAudi;
}

module.exports = filterBMWAndAudi;