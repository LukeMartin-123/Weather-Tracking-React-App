const express = require("express")
const router = express.Router();
const Location = require("../models/locationModel")

router.get("/", (req, res) => {
    Location.find({ })
        .then((data) => {
            console.log("Data ", data)
            res.json(data)
        })
        .catch((error) => {
            console.log(err)
        })
    });

router.post("/save", (req, res) => {
    console.log("Body: ", req.body);
    res.json({
        msg: "We received your data"
    });
});


module.exports = router