const router = require("express").Router();
const User = require("../models/User");
const Pet = require("../models/Pet");

//add pet
router.post("/add", async(req, res) => {
    const newPet = new Pet(req.body);
    try {
        const savedPet = await newPet.save();
        res.status(200).json(savedPet)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;