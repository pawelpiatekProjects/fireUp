import React from "react";
import {Layout} from 'antd';
import TopNav from "../TopNav/TopNav";
import { ContentWrapper, CardsWrapper, ImagesRowWrapper} from './HomeStyles';
import Cards from "./Cards/Cards";
import ImagesRow from "./ImagesRow/ImagesRow";

const {Header, Footer} = Layout;

const Home: React.FC = () => {

    return (
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
            </ContentWrapper>
            <Footer>
                <p>Footer</p>
            </Footer>
        </Layout>
    )
};

export default Home;