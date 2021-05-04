import React, {useContext, useState} from 'react'
import axios from 'axios';
import {PopUpContext} from "../../contexts/PopUpContext";
import Weather from "./Weather";
import {WeatherData} from '../../shared/interfaces';

/** Function that returns openweathermap url for selected city and API key */
const getUrl = (city: string) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
}

/** Function that returns image url for appropriate weather conditions */
const getIconUrl = (icon: string) => {
    return`http://openweathermap.org/img/wn/${icon}@4x.png`;
}

/** Controller which contains logic for Weather component */
const WeatherController: React.FC = () => {

    const {onOpenPopUp} = useContext(PopUpContext)

    const [weatherInfo, setWeatherInfo] = useState({} as WeatherData);
    const [isLoading, setIsLoading] = useState(false);

    /** Function for fetching weather conditions for selected city */
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