import React from "react";
import TopNav from "../TopNav/TopNav";
import {
    ContentWrapper,
    CardsWrapper,
    ImagesRowWrapper,
    CarouselWrapper,
    Footer
} from './HomeStyles';
import Cards from "./Cards/Cards";
import ImagesRow from "./ImagesRow/ImagesRow";
import Carousel from "./Carousel/Carousel";
import {Col, Row, Space} from "antd";
import BottomCard from "../BottomCard/BottomCard";


const Home: React.FC = () => {

    return (
        <>
            <ContentWrapper>
                <Space direction='vertical' size={80}>
                    <CardsWrapper>
                        <Cards/>
                    </CardsWrapper>
                    <ImagesRowWrapper>
                        <ImagesRow/>
                    </ImagesRowWrapper>
                    <Row >
                        <Col xl={{span: 24}} lg={{span: 24}}>
                            <Row gutter={[0,20]}>
                                <Col
                                    xl={{span: 11}}
                                    lg={{span:20, offset: 2}}
                                    md={{span:20, offset: 2}}
                                    sm={{span:20, offset: 2}}
                                    xs={{span:20, offset: 2}}
                                >
                                    <Carousel/>
                                </Col>
                                <Col
                                    xl={{span: 8, offset: 1}}
                                    lg={{span: 20, offset: 2}}
                                    md={{span: 20, offset: 2}}
                                    sm={{span: 20, offset: 2}}
                                    xs={{span: 20, offset: 2}}
                                >
                                    <BottomCard/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{span: 24}} lg={{span: 24}} md={{span: 24}} sm={{span: 24}} xs={{span: 24}}>
                            <Footer/>
                        </Col>
                    </Row>
                </Space>
            </ContentWrapper>
        </>
    )
};

export default Home;