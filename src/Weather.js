import React, { useState } from "react";
import './Weather.css';
const api = {
    key: "4f8e795dcd6dbf7b9f5276bff095ffc1",
    base: "https://api.openweathermap.org/data/2.5/"
}
function Weather() {
    const [search, setsearch] = useState("")
    const [weathers, setweather] = useState("")
    const keypress = e => {
        if (e.key === "Enter") {
            if( search ===''){
                alert("please enter the city")
            }
            else{
            fetch(`${api.base}weather?q=${search}&APPID=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    setweather(result)
                    console.log(result)
                })
            }
        }
    }
    return (
        <div>
            <main>
                <div className="container">
                    <div className="searchbox">
                        <input
                            type="text"
                            className="searchbar"
                            placeholder="Search..."
                            onChange={e => setsearch(e.target.value)}
                            
                            onKeyPress={keypress}></input>
                    </div>
                    <div className="locationbox">
                        <p className="location">{weathers.name}</p>
                    </div>
                    {(typeof weathers.name != "undefined") ? (
                        <div>
                            <div className="weatherbox">
                                <p className="weathertemp">{weathers.main.temp}°C</p>
                            </div>
                            <div>
                                <p className="weathermain">{weathers.weather[0].main}</p>
                            </div>
                        </div>
                    ) : (" ")}
                </div>
            </main>
        </div>
    )
}
export default Weather