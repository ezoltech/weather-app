import { React, useState } from 'react'
import './App.css';
import axios from 'axios'
import Slide from 'react-reveal/Slide'
import Bounce from 'react-reveal/Bounce'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  // eslint-disable-next-line no-template-curly-in-string
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3f4b7a8e539b0b108265533801b479bf`;
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
      <video id="background-video" autoPlay loop muted>
        <source src="https://sexy-avocado.000webhostapp.com/bg_video.mp4" type="video/mp4" />
      </video>
      <div className="searchbar">
        <Slide left>
          <input
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
          />
        </Slide>

      </div>
      <div className="container">
        {/* upper part */}
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}◦C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}

          </div>
        </div>
        {/* lower part */}

        {data.name !== undefined &&
          < div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like}◦C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
              <p>Humidty</p>
            </div>
            <div className="wind">
              {data.main ? <p className='bold'>{data.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



        <h3>Made by <a href='https://github.com/ezoltech'>Ezolbest</a></h3>
        <Bounce bottom>
          <h2>👋 Hi there, you can use this weather app by just search and hit enter from your keyboard</h2>
        </Bounce>

      </div>

    </div >
  );
}

export default App;
