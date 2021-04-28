import React from "react";
import {Layout, Row, Col, Card, Typography} from 'antd';
import TopNav from "../TopNav/TopNav";
import {Button} from 'antd';
import {Intro, IntroButtons, IntroContent, ContentWrapper} from './HomeStyles';

const {Header, Footer} = Layout;
const {Title, Text} = Typography;

const Home: React.FC = () => {
    return (
        <Layout>
            <Header>
                <TopNav/>
            </Header>
            <ContentWrapper>
                <Intro>
                    <Row gutter={[48, 16]} align='middle'>
                        <Col xl={{span: 4, offset: 2}} lg={{span: 4, offset: 2}} md={{span: 24}} xs={{span: 24}}>
                            <Row gutter={[16,8]}>
                                <Col xl={{span: 24}}>
                                    <Button>Box name1</Button>
                                </Col>
                                <Col xl={{span: 24}}>
                                    <Button>Box name2</Button>
                                </Col>
                                <Col xl={{span: 24}}>
                                    <Button>Box name3</Button>
                                </Col>
                                <Col xl={{span: 24}}>
                                    <Button>Box name4</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={{span: 14, offset: 2}} lg={{span: 14, offset: 2}} md={{span: 24}} xs={{span: 24}}>
                            <Card>
                                <Title level={4}>Title</Title>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ultricies
                                    dui. Donec ante enim, elementum at turpis in, congue fermentum metus. Duis ac semper
                                    libero. Phasellus fermentum blandit neque ac varius. Phasellus lobortis nibh quis
                                    ultricies ultricies. Cras ut massa turpis. Aenean et consequat arcu. Duis tincidunt
                                    lectus eget molestie commodo. Suspendisse metus nunc, auctor sit amet ex a, faucibus
                                    tempor ipsum. In at nulla vitae purus luctus luctus. Suspendisse eleifend,
                                </Text>
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