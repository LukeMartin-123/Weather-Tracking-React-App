import axios from "axios";


export default {

    //Post Locations
    saveLocation: function (locationData) {
        return axios.post("/api/locations/", locationData);
    },

    //Gets All Locations
    getLocations: function () {
        return axios.get("api/locations/");
    }

};