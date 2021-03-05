const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Testing the server path in PostMan
app.get("/test", (req, res) => {
    res.send("It Works")
})

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);

});


module.exports = app;