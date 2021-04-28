import React from 'react';
import {Row, Col} from 'antd'
import styled from "styled-components";
import * as variables from '../../../assets/styles/variables';
import office1 from '../../../assets/images/office1.jpg';
import office2 from '../../../assets/images/office2.jpg';
import office3 from '../../../assets/images/office3.jpg';
import office4 from '../../../assets/images/office4.jpg';

interface IImages {
    img: string;
    color: string;
}

const Image = styled.div<IImages>`
  background-image: ${props => `linear-gradient(0deg, ${props.color}, ${props.color}), url(${props.img})`};
  width: 100%;
  height: 20rem;
  background-size: cover;
  border-radius: 2rem;
  transition: transform .3s;
  
  &:hover {
    transform: scale(1.03);
  }
`;

const ImagesRow: React.FC = () => {
    return(
        <>
            <Row gutter={12}>
                <Col xl={{span: 6}} xs={{span: 24}}>
                    <Image img={office1} color={variables.primaryBlue}/>
                </Col>
                <Col xl={{span: 6}} xs={{span: 24}}>
                    <Image img={office2} color={variables.primaryYellow}/>
                </Col>
                <Col xl={{span: 6}} xs={{span: 24}}>
                    <Image img={office3} color={variables.secondaryYellow}/>
                </Col>
                <Col xl={{span: 6}} xs={{span: 24}}>
                    <Image img={office4} color={variables.secondaryBlue}/>
                </Col>
            </Row>
        </>

    )
};

export default ImagesRow;