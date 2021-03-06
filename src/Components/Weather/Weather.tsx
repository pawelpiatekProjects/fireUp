import React from "react";
import {
    CardItem,
    EmptyWeatherCard,
    EmptyWeatherTitle,
    SearchInput,
    Temperature,
    WeatherImg,
    WeatherWrapper
} from "./WeatherStyles";
import {Col, Row, Typography} from "antd";
import {AimOutlined, CloudOutlined} from "@ant-design/icons";
import {WeatherData} from '../../shared/interfaces';

const {Title, Text} = Typography;

interface Props {
    onSearch: (value: string) => void;
    weatherInfo: WeatherData;
    isLoading: boolean;
    getIconUrl: (icon: string) => string;
}

/** Component displayed on '/weather' route which presents weather conditions of selected city */
const Weather: React.FC<Props> = ({onSearch, weatherInfo, isLoading, getIconUrl}) => {
    return (
        <WeatherWrapper>
            <Row align='middle'>
                <Col
                    xl={{span: 12, offset: 6}}
                    lg={{span: 12, offset: 6}}
                    md={{span: 16, offset: 4}}
                    sm={{span: 20, offset: 2}}
                    xs={{span: 22, offset: 1}}
                >
                    <SearchInput
                        placeholder="enter city name"
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                    {Object.keys(weatherInfo).length === 0 ? (
                        <EmptyWeatherCard>
                            <Row>
                                <Col
                                    xl={{span: 14, offset: 5}}
                                    lg={{span: 18, offset: 3}}
                                    md={{span: 20, offset: 2}}
                                    sm={{span: 20, offset: 2}}
                                    xs={{span: 20, offset: 2}}
                                >
                                    <EmptyWeatherTitle type='secondary' level={4}>Enter city name to check weather</EmptyWeatherTitle>
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
                                    <WeatherImg
                                        src={getIconUrl(weatherInfo.weather[0].icon)}
                                        alt='WeatherController image'
                                    />
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

export default Weather