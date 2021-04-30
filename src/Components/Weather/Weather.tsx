import React from 'react'
import TopNav from "../TopNav/TopNav";
import axios from 'axios';
import {Input} from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const {Search} = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const WEATHER_API_KEY = 'e7f9e8da664624d4f048d9c25a592a01';

const url = (city: string) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`;
}

const Weather: React.FC = () => {

    const onFetchWeatherData = async(city: string) => {
        const {data} = await axios.get(url(city));

        console.log(data);
    }

    const onSearch = async(value: string) => {
        await onFetchWeatherData(value);
    }


    return (
        <>
            <TopNav/>
            <h2>Weather</h2>
            <Search
                placeholder="input search text"
                enterButton="Search"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
            />
        </>

    )
};

export default Weather;