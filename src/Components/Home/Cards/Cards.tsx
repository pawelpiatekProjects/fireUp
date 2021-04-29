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
                <MainRow gutter={{xl: 16, lg: 16, md: 0}} align='middle'>
                    <Col xl={{span: 4, offset: 4}} lg={{span: 4, offset: 2}} md={{span: 24,}} xs={{span: 24}}>
                        <Row gutter={[16, 20]}>
                            {cardsData.map((card, id) => (
                                <Col xl={{span: 24}} key={id} xs={{span: 8}}>
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
                    <Col xl={{span: 8, offset: 4}} lg={{span: 10, offset: 2}} md={{span: 24}} xs={{span: 24}}>
                        <CardWrapper>
                            <CardElement>
                                <Title level={4}>{cardsData[activeCard].cardTitle}</Title>
                                <Text>{cardsData[activeCard].cardContent}</Text>
                            </CardElement>
                            {/*<CardImg src={flower}/>*/}
                        </CardWrapper>
                    </Col>
                </MainRow>

    )
};

export default Cards;