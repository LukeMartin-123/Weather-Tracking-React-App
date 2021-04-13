import React from "react";
import "./Home.css";

const apiKey = {
  key: "9e0d8e95fda39b3fbd21fb0a7505ef69",
  base: "https://api.openweathermap.org/data/2.5"
}

function Home() {
  return (
    <div className="home">
      <main>
        <div className="search-box">
          <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          >

          </input>
        </div>
      </main>

    </div>

  );
}

export default Home;
