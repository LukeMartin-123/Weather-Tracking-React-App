const router = require("express").Router();


const apiKey = "9e0d8e95fda39b3fbd21fb0a7505ef69"

//3rd Party API call to Open Weather
// const search = evt => {
//     if (evt.key === "Enter") {
//     fetch("api.openweathermap.org/data/2.5/weather?q=${city},{Colorado},{USA}&appid=${apiKey}")
//       .then(res => res.json())
//       .then(result => {
//         setWeather(result);
//         setCity("")
//         console.log(result)
//     });
//   }
//   }

module.exports = router