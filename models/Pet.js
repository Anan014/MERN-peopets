const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    petname: {
        type: String,
        max: 500,
    },
    petanimal: {
        type: String,
        max: 500,
    },
    gender: {
        type: String,
        max: 500,
    },
    age: {
        type: String,
        max: 10,
    },
    desc: {
        type: String,
        max: 500,
    },
    petProfilePicture: {
        type: String,
        default: "",
    }
}, { timestamps: true });

module.exports = mongoose.model("Pet", PetSchema)