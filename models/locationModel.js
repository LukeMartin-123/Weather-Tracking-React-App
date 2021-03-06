const mongoose = require("mongoose");

// Creating Location Schema
const locationSchema = new mongoose.Schema({
    city: {type: String, required: true},
    state: {type: String},
    country: {type: String, required: true},
    temperature: {type: Number, required: true}
});

// Defining the Location Model based on above Schema
const Location = mongoose.model("location", locationSchema)

module.exports = Location;