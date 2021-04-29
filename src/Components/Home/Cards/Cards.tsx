import React, {useState} from "react";
import {MainRow, CardWrapper, CardElement, CardImg} from './CardStyles';
import {Button, Col, Row, Typography} from "antd";
import {cardsData} from "./cardsData";
import flower from '../../../assets/images/Flower.png';

const {Text, Title} = Typography;




const Cards: React.FC = () => {
    const [activeCard, setActiveCard] = useState(cardsData[0]);

    return (
        <MainRow gutter={[48, 16]} align='middle'>
            <Col xl={{span: 2, offset: 4}} lg={{span: 4, offset: 2}} md={{span: 24}} xs={{span: 24}}>
                <Row gutter={[16, 8]}>
                    {cardsData.map((card, id) => (
                        <Col xl={{span: 24}} key={id}>
                            <Button onClick={() => setActiveCard(cardsData[id])} size='large'>{card.buttonName}</Button>
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col xl={{span: 8, offset: 2}} lg={{span: 10, offset: 2}} md={{span: 24}} xs={{span: 24}}>
                <CardWrapper>
                    <CardElement>
                        <Title level={4}>{activeCard.cardTitle}</Title>
                        <Text>{activeCard.cardContent}</Text>
                    </CardElement>
                    <CardImg src={flower}/>
                </CardWrapper>
            </Col>
        </MainRow>
    )
};

export default Cards;