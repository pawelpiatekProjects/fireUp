import React from "react";
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
                <SliderWrapper>
                    <Slider/>
                </SliderWrapper>
            </ContentWrapper>
        </>
    )
};

export default Home;