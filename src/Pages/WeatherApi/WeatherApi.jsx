import { useEffect, useState } from 'react'
import './WeatherApi.css'
import clear_icon from '../../assets/clear.png'
import clouds_icon from '../../assets/clouds.png'
import drizzle_icon from '../../assets/drizzle.png'
import mist_icon from '../../assets/mist.png'
import rain_icon from '../../assets/rain.png'
import snow_icon from '../../assets/snow.png'
import search_icon from '../../assets/search.png'
import humidity_icon from '../../assets/humidity.png'
import wind_icon from '../../assets/wind.png'


const WeatherApi = () => {

    const api_key = "bd6b5acd044cb40b3b65f7962800a565";
    const api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
      const [city, setCity] = useState("Mumbai");
    const [inputCity, setInputCity] = useState(""); // To store the user's input


    const [weather, setWeather] = useState({
      temp: "0°c",
      city: "City",
      humidity: "0%",
      wind: "00 km/h",
      condition: "Clear"
    });



    const [weatherIcon, setWeatherIcon] = useState(clear_icon); // Default icon



    async function checkWeather(city) {
        let response = await fetch(api_url + city + `&appid=${api_key}`);
        let data = await response.json();
        if (!response.ok) {
        alert("City not found. Please enter a valid city.");
        return;
        }
       
        console.log(data);
        setWeather({
            temp: Math.round(data.main.temp) + "°c" ,
            city: data.name, 
            humidity: data.main.humidity + "%" ,
            wind: data.wind.speed + " km/h" ,
            condition: "Clear"
        });

     // Set weather icon based on condition
        switch (data.weather[0].main) {
            case "Clear":
            setWeatherIcon(clear_icon);
            break;
            case "Clouds":
            setWeatherIcon(clouds_icon);
             break;
             case "Drizzle":
             setWeatherIcon(drizzle_icon);
              break;
              case "Rain":
              setWeatherIcon(rain_icon);
              break;
              case "Mist":
              setWeatherIcon(mist_icon);
               break;
              case "Snow":
              setWeatherIcon(snow_icon);
              break;
                   
            default:
                setWeatherIcon(clear_icon);
                break;
        }




    }

useEffect(()=>{
    checkWeather(city);
}, [city]);

  // Handle user input in the search field
  const handleSearch = () => {
    if (inputCity.trim()) {
      setCity(inputCity); // Update city to fetch new weather data
      setInputCity(""); // Clear the input after search
    }
    else if(inputCity == ""){
        alert("Enter the city name")

    }
  };


  return (
<div className="card">
{/* <div className="search-box">
    <input type="text" placeholder="Enter city..." spellCheck="false" className="input-box"/>
    <button onClick={()=>{handleSearch}}><img src={search_icon} alt=""/></button>
</div> */}

<div className="search-box">
        <input
          type="text"
          placeholder="Search City name"
          value={inputCity}
        spellCheck="false"
          onChange={(e) => setInputCity(e.target.value)} // Update inputCity state
        />

        <button onClick={handleSearch}>
          <img src={search_icon} alt="" />
        </button>
      </div>



<div className="weather">
<img src={weatherIcon} alt="" className="weather-icon"/>
<h2 className="temp">{weather.temp}</h2>
<h3 className="city">{weather.city}</h3>

<div className="weather-details">
   <div className="col">
    <img src={humidity_icon} alt=""/>
    <div className="data">
        <p className="humidity">{weather.humidity}</p>
        <p>Humidity</p>
    </div>
   </div>

   <div className="col">
    <img src={wind_icon} alt=""/>
    <div className="data">
        <p className="wind">{weather.wind}</p>
        <p >Wind Speed</p>
    </div>
   </div>
</div>



</div>



</div>
  )
}

export default WeatherApi
