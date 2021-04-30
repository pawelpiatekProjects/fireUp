import React, {useState, useContext} from "react";
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
import {PopUpContext} from "../../../contexts/PopUpContext";

const Carousel: React.FC = () => {

    const {onOpenPopUp} = useContext(PopUpContext);

    const images = [office1, office2, office3, office4];

    const [activeImages, setActiveImages] = useState([0, 1]);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlePopUpOpen = () => {
        onOpenPopUp({
            header: 'Lorem Ipsum',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi id lorem semper dapibus. Maecenas et diam felis. Maecenas iaculis vehicula justo et efficitur.'
        });
    }

    const swipeImagesLeft = () => {
        setIsAnimating(true);
        if(activeImages[1] === images.length - 1) {
          handlePopUpOpen();
        }
        setActiveImages(prevState => {
            if (prevState[1] === images.length - 1) {
                return [prevState[0] + 1, 0];
            } else if (prevState[0] === images.length - 1) {
                return [prevState[1], prevState[1] + 1];
            } else {
                return [prevState[0] + 1, prevState[1] + 1];
            }
        })

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }

    const swipeImagesRight = () => {
        setIsAnimating(true);
        if(activeImages[0] === images.length - 1) {
            handlePopUpOpen();
        }
        setActiveImages(prevState => {
            if(prevState[0] === 0) {
                return [images.length - 1, prevState[1] - 1];
            } else if (prevState[1] === 0) {
                return [prevState[0] - 1, prevState[0]];
            } else {
                return [prevState[0] - 1, prevState[1] - 1];
            }
        })

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }

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