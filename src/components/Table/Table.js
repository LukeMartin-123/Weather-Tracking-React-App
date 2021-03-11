import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Table(props) {
  const [locations, setLocations] = useState({})
  const [weather, setWeather] = useState({})

  useEffect(() => {
    getLocations()
  }, []);

    function getLocations() {
      axios.get("/api")
        .then((res) => {
          const cityData = res.data;
          const weatherData = res.main.temp;
          setLocations(cityData)
          setWeather(weatherData)
          console.log(res)
          console.log("Data has been received")

        })
        .catch(() => {
          console.log("Data has not been received")
        })
    }


    return (
    <div className="location-table">
        <p>  </p>
    </div>
  )
}


export default Table
