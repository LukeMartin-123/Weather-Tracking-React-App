import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import API from "./utils/API"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [city, setCity] = useState("")
  // const [weather, setWeather] = useState("")

  const search = evt => {
    if(evt.key === "Enter") {
      API.searchLocation()
        .then(res => res.json())
        .then(result => {
          console.log(result)
        })
        
    }
  
  }

  return (
    <Router>
      <div>
        <Navbar />
      <input 
      type="text"
      className="search-bar"
      placeholder="city"
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress = {search}
     />
    </div>
  </Router>
  )}

export default App;
