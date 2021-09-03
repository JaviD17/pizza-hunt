const { Schema, model } = require("mongoose");

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: String,
        default: Date.now
    },
    size: {
        type: String
    },
    toppings: []
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;