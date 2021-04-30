import React, {useState} from 'react'
import TopNav from "../TopNav/TopNav";
import axios from 'axios';
import {Input, Row, Col, Card, Typography} from 'antd';
import { AudioOutlined, CloudOutlined, AimOutlined } from '@ant-design/icons';
import {WeatherWrapper, SearchInput, EmptyWeatherCard, Temperature, CardItem} from './WeatherStyles';


const {Title, Text} = Typography;

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

    const [weatherInfo, setWeatherInfo] = useState({} as WeatherApiResponse);
    const [isLoading, setIsLoading] = useState(false);

    const onFetchWeatherData = async(city: string) => {
        setIsLoading(true);
        try {
            const {data} = await axios.get<WeatherApiResponse>(getUrl(city));

            setWeatherInfo(data);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    const onSearch = async(value: string) => {
        await onFetchWeatherData(value);
    }


    return (
        <WeatherWrapper>
            <TopNav/>
            <Row align='middle'>
                <Col xl={{span: 8, offset: 8}}>
                    <SearchInput
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
                        <CardItem loading={isLoading}>
                            <Row>
                                <Col flex={3}>
                                    <img src={getIconUrl(weatherInfo.weather[0].icon)} alt='Weather image'/>
                                    <Title type='secondary' level={4}>
                                        {weatherInfo.weather[0].description.charAt(0).toUpperCase()
                                        + weatherInfo.weather[0].description.slice(1)}
                                    </Title>
                                    <Text type="secondary" strong><AimOutlined/> {weatherInfo.name}</Text>
                                </Col>
                                <Col flex={2}>
                                    <Temperature>{weatherInfo.main.temp.toFixed(0)}</Temperature>
                                </Col>
                            </Row>
                        </CardItem>
                    )}
                </Col>
            </Row>
        </WeatherWrapper>

    )
};

export default Weather;