import React, {useState} from 'react'
import TopNav from "../TopNav/TopNav";
import axios from 'axios';
import {Input, Row, Col, Card, Typography} from 'antd';
import { AudioOutlined, CloudOutlined } from '@ant-design/icons';
import {EmptyWeatherCard, WeatherCard} from './WeatherStyles';

const {Search} = Input;
const {Title} = Typography;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

interface WeatherApiResponse {
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    },
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    name: string;
}


const WEATHER_API_KEY = 'e7f9e8da664624d4f048d9c25a592a01';

const getUrl = (city: string) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`;
}

const getIconUrl = (icon: string) => {
    return`http://openweathermap.org/img/wn/${icon}@4x.png`;
}

const Weather: React.FC = () => {

    const [weatherInfo, setWeatherInfo] = useState({} as WeatherApiResponse)

    const onFetchWeatherData = async(city: string) => {

        try {
            const {data} = await axios.get<WeatherApiResponse>(getUrl(city));

            setWeatherInfo(data);
        } catch (e) {
            console.log(e);
        }


    }

    const onSearch = async(value: string) => {
        await onFetchWeatherData(value);
    }


    return (
        <>
            <TopNav/>
            <Row align='middle'>
                <Col xl={{span: 12, offset: 6}}>
                    <h2>Weather</h2>
                    <Search
                        placeholder="enter city name"
                        enterButton="Search"
                        size="large"
                        suffix={suffix}
                        onSearch={onSearch}
                    />
                    {Object.keys(weatherInfo).length === 0 ? (
                        <EmptyWeatherCard>
                            <Row>
                                <Col span='14' offset='5'>
                                    <Title type='secondary' level={3}>Enter city name to check weather</Title>
                                </Col>
                                <Col span='2' offset='11'>
                                    <CloudOutlined />
                                </Col>
                            </Row>
                        </EmptyWeatherCard>
                    ): (
                        <WeatherCard>
                            <Title level={2}>Weather in: {weatherInfo.name}</Title>
                            <Row>
                                <Col lg={{span: 12, offset: 6}}>
                                    <Title level={4}>{weatherInfo.weather[0].description}</Title>
                                </Col>
                                <Col lg={{span: 12, offset: 6}}>
                                    <Title level={3}>{weatherInfo.main.temp}</Title>
                                    <img src={getIconUrl(weatherInfo.weather[0].icon)}/>
                                </Col>
                            </Row>
                        </WeatherCard>
                    )}
                </Col>
            </Row>
        </>

    )
};

export default Weather;