import React from 'react'
import './Weather.css'
import searchIcon from '../assets/search-icon.jpg'
import weather from '../assets/weather1.webp'
import Humidity from '../assets/humidity.jpg'
import windSpeed from '../assets/windSpeed.jpg'


const Weather = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' placeholder='Search' />
                <img src={searchIcon} alt='search' className='img'/>
            </div>

            <img src={weather} alt='weather' className='weather-icon'/>
            <p className='temperature'>16C</p>
            <p className='location'>London</p>

            <div className="weather-data">
                <div className="col">
                    <img src={Humidity } alt='Humidity' className='img-humidity'/>
                    <div>
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={windSpeed } alt='windSpeed ' className='windSpeed'/>
                    <div>
                        <p>3.6 Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
