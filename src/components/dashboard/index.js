import { FiWind } from "react-icons/fi";
import { MdOutlineWindPower } from "react-icons/md";
import { MdCompress } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";

import "./index.css"

function convertUnixToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const timeStr = `${hours}:${minutesStr} ${ampm}`;
    return timeStr;
}

function convertKelvinintoCelcius(tempinkelvin){
    const celcius= tempinkelvin - 273.15
    const roundTemp = Math.round(celcius)
    return roundTemp
}

function getWindDirection(degrees) {
    const directions = [
        "N", "NNE", "NE", "ENE", 
        "E", "ESE", "SE", "SSE", 
        "S", "SSW", "SW", "WSW", 
        "W", "WNW", "NW", "NNW"
    ];
    const index = Math.floor((degrees + 11.25) / 22.5) % 16;
    return directions[index];
}

const Dashboard = props =>{
    const {weatherDetails,theme} = props
    const location = weatherDetails.name
    const longitude = weatherDetails.coord.lon
    const latitude = weatherDetails.coord.lat 
    const temperature = weatherDetails.main.temp
    const feelsLike = weatherDetails.main.feels_like
    const pressure = weatherDetails.main.pressure
    const humidity = weatherDetails.main.humidity
    const visibility = weatherDetails.visibility
    const timeZone = weatherDetails.timezone
    const {weather} = weatherDetails
    const {description,icon} = weather[0]
    const windSpeed = weatherDetails.wind.speed 
    const windDirection = weatherDetails.wind.deg
    const sunrise = weatherDetails.sys.sunrise
    const sunset = weatherDetails.sys.sunset
    const country = weatherDetails.sys.country
    let date = weatherDetails.dt
    
    date = new Date(date * 1000);

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const splittedDate = formattedDate.split(", ")
    const day = splittedDate[0]
    const dayDate =splittedDate[1].split(" ")[1]
    const month = splittedDate[1].split(" ")[0]
    
    const sunrisetime = convertUnixToTime(sunrise)
    const sunsettime = convertUnixToTime(sunset) 
    
    const temperatureInCelcius = convertKelvinintoCelcius(temperature)
    const feelsLikeTemperatureInCelcius = convertKelvinintoCelcius(feelsLike)
    const windDirectionText= getWindDirection(windDirection)
    function getTimeByOffset(offsetInSeconds) {
        const utcTime = Date.now();
        const offsetInMilliseconds = offsetInSeconds * 1000;
        const localTime = new Date(utcTime + offsetInMilliseconds);
        const hours = localTime.getUTCHours().toString().padStart(2, '0');
        const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    const time= getTimeByOffset(timeZone)
    
    return(
        <div className={`${theme}-dashboard-container dashboard-container`}>
            <div className="location-details-container container">
                <div className="location-container">
                    <h1 className="location-heading">
                        {location} <span className="country-name">{country}, {time}</span>
                    </h1>
                    <p className="co-ordinates">
                        {longitude}&deg; longitude, {latitude}&deg; latitude 
                    </p>
                </div>
                <div className={`${theme}-card card date-container`}>
                    <h1 className="day">
                        {day}
                    </h1>
                    <h1 className="date">
                        {dayDate}
                    </h1>
                    <h1 className="month">
                        {month}
                    </h1>
                </div>
                <div className="sunrise-sunset-container">
                    <div className="sunrise-sunset-img-container">
                        <img className="sunrise-sunset-img" src="https://res.cloudinary.com/dhrxxm585/image/upload/v1718540074/sunrise-sunset-img_flwpyi.png" alt="sun img" loading="lazy" />
                    </div>
                    <div className="sunrise-sunset-content-container">
                        <h1>Sun rise<br/> {sunrisetime}</h1>
                        <h1>Sun set<br/>{sunsettime}</h1>
                    </div>
                </div>
            </div>
            <div className="temperature-details-container container">
                <div className="temperature-container">
                    <h1 className="temperature">
                        {temperatureInCelcius}&deg;C
                    </h1>
                    <img className="temperature-img" src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt={description} />
                </div>
                <p className="feels-like">Feels like : {feelsLikeTemperatureInCelcius}&deg;C</p>
                <p className="description">
                    {description}
                </p>
            </div>
            <div className="weather-details-container container">
                <div className={`${theme}-card card`}>
                    <p className="item-name">
                        Wind speed
                    </p>
                    <p className="item-icon">
                        <FiWind />
                    </p>
                    <p className="item-value">
                        {windSpeed}m/s
                    </p>
                </div>
                <div className={`${theme}-card card`}>
                    <p className="item-name">
                        Wind direction
                    </p>
                    <p className="item-icon">
                        <MdOutlineWindPower />
                    </p>
                    <p className="item-value">
                        {windDirectionText}
                    </p>
                </div>
                <div className={`${theme}-card card`}>
                    <p className="item-name">
                        Pressure
                    </p>
                    <p className="item-icon">
                        <MdCompress />
                    </p>
                    <p className="item-value">
                        {pressure}hpa
                    </p>
                </div>
                <div className={`${theme}-card card`}>
                    <p className="item-name">
                        Humidity
                    </p>
                    <p className="item-icon">
                        <WiHumidity />
                    </p>
                    <p className="item-value">
                        {humidity}%
                    </p>
                </div>
                <div className={`${theme}-card card`}>
                    <p className="item-name">
                        Visibility
                    </p>
                    <p className="item-icon">
                        <MdVisibility />
                    </p>
                    <p className="item-value">
                        {visibility/1000}Km
                    </p>
                </div>
            </div>
        </div>
    )
} 

export default Dashboard