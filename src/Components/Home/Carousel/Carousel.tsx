import React from "react";
import {Row, Col} from 'antd';
import {DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons';
import {
    CarouselWrapper,
    CarouselItemLeft,
    CarouselItemRight,
    CarouselItemButton
} from './CarouselStyles';

interface Props {
    images: string[];
    activeImages: number[];
    isAnimating: boolean;
    swipeImagesLeft: () => void;
    swipeImagesRight: () => void;
}

/** Carousel component */
const Carousel: React.FC<Props> = (
    {images, activeImages, isAnimating, swipeImagesLeft, swipeImagesRight}
) => {

    return (
        <CarouselWrapper>
            <Row gutter={[10, 0]}>
                <Col
                    xl={{span: 12}}
                    lg={{span: 12}}
                    md={{span: 12}}
                    sm={{span: 12}}
                    xs={{span: 12}}
                >
                    <CarouselItemLeft
                        img={images[activeImages[0]]}
                        isAnimating={isAnimating}
                    >
                        <CarouselItemButton mode='right' onClick={() => swipeImagesRight()}>
                            <DoubleRightOutlined/>
                        </CarouselItemButton>
                    </CarouselItemLeft>
                </Col>
                <Col
                    xl={{span: 12}}
                    lg={{span: 12}}
                    md={{span: 12}}
                    sm={{span: 12}}
                    xs={{span: 12}}
                >
                    <CarouselItemRight
                        img={images[activeImages[1]]}
                        isAnimating={isAnimating}
                    >
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