import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import'./Home.css'
function Home(){
    const navigate=useNavigate()
    const navweather = () => {
        navigate('/weather')
      }
    return(
        <div>
            <div className="container">

                <h1> Welcome to Weather App</h1>
                
                <div className="para1">
                    <p>WeatherKit is an API integration which provides third-party developers with access to the Apple Weather service, replacing the former Dark Sky API. Developers can make a limited number of 500,000 API requests per month for free, with subscription options available to increase the request limit.</p>
                </div>
                <div className="para2">
                    <p>Weather is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy.[1] On Earth, most weather phenomena occur in the lowest layer of the planet's atmosphere, the troposphere,[2][3] just below the stratosphere. Weather refers to day-to-day temperature, precipitation, and other atmospheric conditions, whereas climate is the term for the averaging of atmospheric conditions over longer periods of time.[4] When used without qualification, "weather" is generally understood to mean the weather of Earth.</p>
                </div>
                <div className="button">
                    <button className="btn"onClick={navweather}>Go to Weather</button>
                </div>
                <Outlet />
                
            </div>
        </div>
    )
    
}
export default Home