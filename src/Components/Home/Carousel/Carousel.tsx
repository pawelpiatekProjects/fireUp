import React, {useState} from "react";
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
import office3 from '../../../assets/images/office3.jpg'
import office4 from '../../../assets/images/office4.jpg'

const Carousel: React.FC = () => {
    const images = [office1, office2, office3, office4];

    const [activeImages, setActiveImages] = useState([0, 1]);

    const swipeImagesLeft = () => {
        setActiveImages(prevState => {
            if (prevState[1] === images.length - 1) {
                return [prevState[0] + 1, 0];
            } else if (prevState[0] === images.length - 1) {
                return [prevState[1], prevState[1] + 1];
            } else {
                return [prevState[0] + 1, prevState[1] + 1];
            }
        })
    }

    const swipeImagesRight = () => {
        setActiveImages(prevState => {
            if(prevState[0] === 0) {
                return [images.length - 1, prevState[1] - 1];
            } else if (prevState[1] === 0) {
                return [prevState[0] - 1, prevState[0]];
            } else {
                return [prevState[0] - 1, prevState[1] - 1];
            }
        })
    }

    return (
        <CarouselWrapper>
            <Row gutter={[10, 0]}>
                <Col xl={{span: 12}}>
                    <CarouselItemLeft img={images[activeImages[0]]}>
                        <CarouselItemButton mode='right' onClick={() => swipeImagesRight()}>
                            <DoubleRightOutlined/>
                        </CarouselItemButton>
                    </CarouselItemLeft>
                </Col>
                <Col xl={{span: 12}}>
                    <CarouselItemRight img={images[activeImages[1]]}>
                        <CarouselItemButton mode='left' onClick={() => swipeImagesLeft()}>
                            <DoubleLeftOutlined/>
                        </CarouselItemButton>
                    </CarouselItemRight>
                </Col>
            </Row>
        </CarouselWrapper>
    )
}

export default Carousel;