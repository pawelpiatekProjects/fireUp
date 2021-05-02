import React, {useState} from "react";
import {MainRow, CardWrapper, CardElement, CardImg, CardButton} from './CardStyles';
import {Button, Col, Row, Typography} from "antd";
import {cardsData} from "./cardsData";
import flower from '../../../assets/images/Flower.png';
import * as variables from '../../../assets/styles/variables';
import {Card} from "../../../shared/interfaces";

const {Text, Title} = Typography;

const Cards: React.FC = () => {
    const [activeCard, setActiveCard] = useState(0);

    return (
                <MainRow align='middle' gutter={[0,10]}>
                    <Col xl={{span: 6, offset: 4}} lg={{span: 6, offset: 2}} md={{span: 22, offset: 1}} sm={{span: 22, offset: 1}} xs={{span: 22, offset: 1}}>
                        <Row gutter={[10,10]}>
                            {cardsData.map((card, id) => (
                                <Col lg={{span: 24}} md={{span: 6}} sm={{span: 6}} xs={{span:24}} key={id}>
                                    <CardButton
                                        isActive={id === activeCard}
                                        background={card.style?.background!}
                                        color={card.style?.color!}
                                        onClick={() => setActiveCard(id)}
                                    >
                                        {card.buttonName}
                                    </CardButton>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xl={{span: 8}} lg={{span: 10, offset: 2}} md={{span: 22, offset: 1}} sm={{span: 22, offset: 1}} xs={{span: 22, offset: 1}}>
                        <CardWrapper>
                            <CardElement>
                                <Title level={4}>{cardsData[activeCard].cardTitle}</Title>
                                <Text>{cardsData[activeCard].cardContent}</Text>
                            </CardElement>
                            {/*TODO: add flower*/}
                            <CardImg src={flower}/>
                        </CardWrapper>
                    </Col>
                </MainRow>

    )
};

export default Cards;