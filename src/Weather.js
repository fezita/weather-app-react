import React from "react";
import axios from "axios";

export default function Weather() {
    
    function handleResponse(response) {
        alert(`The weather in New York is ${response.data.main.temp}°`)
    }
    let apiKey = "66561682a201042486582b7a342e4aa5";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=${unit}`;
    
    axios.get(apiUrl).then(handleResponse);

    return ( 
    <h2>
        oieee
    </h2>
    );
}