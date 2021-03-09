import React, { useState } from 'react'
import "./Popup.css"

const api = {
    key: "9e0d8e95fda39b3fbd21fb0a7505ef69",
    base: "https://api.openweathermap.org/data/2.5/"
  }
function Popup(props) {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setCity("");
            console.log(result)
          });
      }
    }
    return (props.trigger) ? (
        <div className="popup">
             <div className="popup-inner">
             <input
              type="text"
              className="search-bar"
              placeholder="city"
              onChange={e => setCity(e.target.value)}
              value={city}
              onKeyPress={search}
            />
                <button className="close-btn" onClick={() => props.setTrigger(false)}> Close </button>
             </div>
        </div>
    ) : "";
}

export default Popup
