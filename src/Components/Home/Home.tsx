import React from "react";
import TopNav from "../TopNav/TopNav";
import {
    ContentWrapper,
    CardsWrapper,
    ImagesRowWrapper,
    CarouselWrapper
} from './HomeStyles';
import Cards from "./Cards/Cards";
import ImagesRow from "./ImagesRow/ImagesRow";
import Carousel from "./Carousel/Carousel";
import {Col, Row} from "antd";
import BottomCard from "../BottomCard/BottomCard";


const Home: React.FC = () => {

    return (
        <>
            <TopNav/>
            <ContentWrapper>
                <CardsWrapper>
                    <Cards/>
                </CardsWrapper>
                <ImagesRowWrapper>
                    <ImagesRow/>
                </ImagesRowWrapper>
                <Row>
                    <Col xl={{span: 20, offset: 2}}>
                        <Row>
                            <Col xl={{span: 12}}>
                                <Carousel/>
                            </Col>
                            <Col xl={{span: 9, offset: 1}}>
                                <BottomCard/>
                            </Col>
                        </Row>
                    </Col>
                </Row>



            </ContentWrapper>
        </>
    )
};

export default Home;