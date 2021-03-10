import axios from "axios";


export default {
searchLocation: function() {
        return axios.get("api/location");
}

};