import React from 'react'

const ColdWeather = () => <h2>It's cold outside!</h2>
const NiceWeather = () => <h2>It's nice outside!</h2>
const HotWeather = () => <h2>It's hot outside!</h2>

const Weather = () => {
    const weather = 9;
    if(weather < 15){
        return <ColdWeather />
    }else if(weather >=15 && weather <=25){
        return <NiceWeather />
    }else{
        return <HotWeather />
    }
}

export default Weather
