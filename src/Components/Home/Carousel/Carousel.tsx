import React from "react";
import {Row, Col} from 'antd';
import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons';
import {
    CarouselWrapper,
    CarouselItemLeft,
    CarouselItemRight,
    CarouselItemButton
} from './CarouselStyles';
import office1 from '../../../assets/images/office1.jpg'
import office2 from '../../../assets/images/office2.jpg'

const Carousel: React.FC = () => {
    return(
        <CarouselWrapper>
            <Row gutter={[10, 0]}>
                <Col xl={{span: 12}}>
                    <CarouselItemLeft img={office1}>
                        <CarouselItemButton mode='right'>
                            <DoubleRightOutlined/>
                        </CarouselItemButton>
                    </CarouselItemLeft>
                </Col>
                <Col xl={{span: 12}}>
                    <CarouselItemRight img={office2}>
                        <CarouselItemButton mode='left'>
                            <DoubleLeftOutlined/>
                        </CarouselItemButton>
                    </CarouselItemRight>
                </Col>
            </Row>
        </CarouselWrapper>
    )
}

export default Carousel;