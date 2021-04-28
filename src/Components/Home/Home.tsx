import React, {useState} from "react";
import {Layout, Row, Col, Card, Typography} from 'antd';
import TopNav from "../TopNav/TopNav";
import {Button} from 'antd';
import {Intro, ContentWrapper} from './HomeStyles';
import {cards} from './Cards';

const {Header, Footer} = Layout;
const {Title, Text} = Typography;

const Home: React.FC = () => {

    const [activeCard, setActiveCard] = useState(cards[0]);

    return (
        <Layout>
            <Header>
                <TopNav/>
            </Header>
            <ContentWrapper>
                <Intro>
                    <Row gutter={[48, 16]} align='middle'>
                        <Col xl={{span: 4, offset: 2}} lg={{span: 4, offset: 2}} md={{span: 24}} xs={{span: 24}}>
                            <Row gutter={[16, 8]}>
                                {cards.map((card, id) => (
                                    <Col xl={{span: 24}} key={id}>
                                        <Button onClick={() => setActiveCard(cards[id])} size='large'>{card.buttonName}</Button>
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
                </Intro>
            </ContentWrapper>
            <Footer>
                <p>Footer</p>
            </Footer>
        </Layout>
    )
};

export default Home;