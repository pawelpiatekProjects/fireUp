import React from "react";
import {Layout, Space} from 'antd';
import TopNav from "../TopNav/TopNav";
import {
    ContentWrapper,
    CardsWrapper,
    ImagesRowWrapper,
    SliderWrapper
} from './HomeStyles';
import Cards from "./Cards/Cards";
import ImagesRow from "./ImagesRow/ImagesRow";
import Slider from "./Slider/Slider";

const {Header, Footer} = Layout;

const Home: React.FC = () => {

    return (
        <>
            <Layout>
                <Header>
                    <TopNav/>
                </Header>
                <ContentWrapper>
                    <CardsWrapper>
                        <Cards/>
                    </CardsWrapper>
                    <ImagesRowWrapper>
                        <ImagesRow/>
                    </ImagesRowWrapper>
                    <SliderWrapper>
                        <Slider/>
                    </SliderWrapper>
                </ContentWrapper>
                <Footer>
                    <p>Footer</p>
                </Footer>
            </Layout>
        </>
    )
};

export default Home;