import React, {useState} from "react";
import {Button, Card, Col, Row, Typography} from "antd";
import {cardsData} from "./cardsData";

const {Text, Title} = Typography;




const Cards: React.FC = () => {
    const [activeCard, setActiveCard] = useState(cardsData[0]);

    return (
        <Row gutter={[48, 16]} align='middle'>
            <Col xl={{span: 4, offset: 2}} lg={{span: 4, offset: 2}} md={{span: 24}} xs={{span: 24}}>
                <Row gutter={[16, 8]}>
                    {cardsData.map((card, id) => (
                        <Col xl={{span: 24}} key={id}>
                            <Button onClick={() => setActiveCard(cardsData[id])} size='large'>{card.buttonName}</Button>
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col xl={{span: 14, offset: 2}} lg={{span: 14, offset: 2}} md={{span: 24}} xs={{span: 24}}>
                <Card>
                    <Title level={4}>{activeCard.cardTitle}</Title>
                    <Text>{activeCard.cardContent}</Text>
                </Card>
            </Col>
        </Row>
    )
};

export default Cards;