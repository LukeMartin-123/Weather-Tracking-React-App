const router = require("express").Router();
const Location = require("../models/locationModel")

router.post("/", async (req, res) => {
    try {
    const {city, state, country, temperature} = req.body;
    
    if (!city || !country)
    return res
        .status(400)
        .json({ errorMessage: "Please enter a city and a country"
    });
    
        const newLocation  = new Location({
            city, state, country, temperature
        })

        const savedLocation = await newLocation.save()
    
     } catch (err) {
        console.log(err);
        res.status(500).send()
    }
});


module.exports = router