const router = require("express").Router();
const Location = require("../models/locationModel")

router.post("/", async (req, res) => {
    try {
    const {city, state, country, temperature} = req.body;
    
    //If there isn't a city or country entered, send an error message to the user
    if (!city || !country)
    return res
        .status(400)
        .json({ errorMessage: "Please enter a city and a country"
    });
    
    //Create a new location schema based off the data that is entered by the user
        const newLocation  = new Location({
            city, state, country, temperature
        })

    //Save that new location to the Mongo database
        const savedLocation = await newLocation.save()
    
     } catch (err) {
        console.log(err);
        res.status(500).send()
    }
});


module.exports = router