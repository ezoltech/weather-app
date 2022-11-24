import { React, useState } from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  // eslint-disable-next-line no-template-curly-in-string
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3f4b7a8e539b0b108265533801b479bf`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }

  }
  return (
    <div className="app">
      <div className="searchbar">
        <input
          type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
        />
      </div>
      <div className="container">
        {/* upper part */}
        <div className="top">
          <div className="location">
            <p>Addis Ababa</p>
          </div>
          <div className="temp">
            <h1>60◦C</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        {/* lower part */}
        <div className="bottom">
          <div className="feels">
            <p className='bold'>65◦C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20</p>
            <p>Humidty</p>
          </div>
          <div className="wind">
            <p className='bold'>12MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
