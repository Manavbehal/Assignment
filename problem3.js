function CarModels(inventory) {
for (let i = 0; i < inventory.length - 1; i++) {
    for (let j = 0; j < inventory.length - i - 1; j++) {
        if (inventory[j].car_model > inventory[j + 1].car_model) {
            // Swap cars if their models are in the wrong order
            const temp = inventory[j];
            inventory[j] = inventory[j + 1];
            inventory[j + 1] = temp;
        }
    }
}
return inventory;
}

module.exports = CarModels;