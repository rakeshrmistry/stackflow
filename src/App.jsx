import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import LoginSignup from "./Pages/LoginSignup/LoginSignup"
import Quote from "./Pages/Quote/Quote"
import WeatherApi from "./Pages/WeatherApi/WeatherApi"


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<LoginSignup/>}/>
    <Route path="/quote-generator" element={<Quote/>}/>
    <Route path="/weather-api" element={<WeatherApi/>}/>
    
    </Routes>


    </>
  )
}

export default App
