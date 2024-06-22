import React from 'react'
import './Weather.css'
import searchIcon from '../assets/search-icon.jpg'


const Weather = () => {
    return (
        <div className='weather'>
            <div className='search-bar'>
                <input type='text' placeholder='Search' />
                <img src={searchIcon} alt='search' className='img'/>
            </div>


        </div>
    )
}

export default Weather
