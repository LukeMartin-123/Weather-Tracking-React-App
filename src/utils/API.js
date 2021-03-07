import axios from "axios";


export default {
searchLocation: function() {
        return axios.get("api.openweathermap.org/data/2.5/weather?q=Denver&appid=9e0d8e95fda39b3fbd21fb0a7505ef69");
    }

};