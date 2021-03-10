const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

// Enabling the .env file to be read
dotenv.config();

// Setting Up Server
const PORT = process.env.PORT || 3001;
const app = express();

const routes = require("./routes/locationRoute")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connecting to MongoDB
mongoose.connect(process.env.MDB_CONNECT, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    }, 
(err) => {
    if (err) return console.error(err)
    console.log("Connected to MongoDB")
});

// Setting up routes
app.use("/", routes);


//Server Connection and Confirmation
app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);

});




module.exports = app;