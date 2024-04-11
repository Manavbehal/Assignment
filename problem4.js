function getCarYears(inventory) {
    const carYears = [];

    for (let i = 0; i < inventory.length; i++) {
        carYears[i] = inventory[i].car_year;
    }

    return carYears;
}
module.exports = getCarYears;