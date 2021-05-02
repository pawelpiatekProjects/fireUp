import React, {useContext, useState} from 'react'
import axios from 'axios';
import {PopUpContext} from "../../contexts/PopUpContext";
import Weather from "./Weather";
import {WeatherData} from '../../shared/interfaces';

//TODO: move API key to env
const WEATHER_API_KEY = 'e7f9e8da664624d4f048d9c25a592a01';

const getUrl = (city: string) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`;
}

const getIconUrl = (icon: string) => {
    return`http://openweathermap.org/img/wn/${icon}@4x.png`;
}

const WeatherController: React.FC = () => {

    const {onOpenPopUp} = useContext(PopUpContext)

    const [weatherInfo, setWeatherInfo] = useState({} as WeatherData);
    const [isLoading, setIsLoading] = useState(false);

    const onFetchWeatherData = async(city: string) => {
        setIsLoading(true);
        try {
            const {data} = await axios.get<WeatherData>(getUrl(city));
            setWeatherInfo(data);
        } catch (e) {
            onOpenPopUp({
                header: 'City not found',
                message: 'Make sure you have entered valid city name'
            });
            setWeatherInfo({} as WeatherData);
        } finally {
            setIsLoading(false);
        }
    }

    const onSearch = async(value: string) => {
        await onFetchWeatherData(value);
    }

    return (
        <Weather
            onSearch={onSearch}
            weatherInfo={weatherInfo}
            isLoading={isLoading}
            getIconUrl={getIconUrl}
        />
    )
};

export default WeatherController;