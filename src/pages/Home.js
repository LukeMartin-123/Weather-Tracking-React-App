import React from "react";
import "./Home.css";

const apiKey = {
  key: "9e0d8e95fda39b3fbd21fb0a7505ef69",
  base: "https://api.openweathermap.org/data/2.5"
}

function Home() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`
  }

  return (
    <div className="home">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location"> Denver </div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15 degrees
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>

    </div>

  );
}

export default Home;
