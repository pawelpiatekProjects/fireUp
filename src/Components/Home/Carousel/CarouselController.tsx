import React, {useContext, useState} from "react";
import Carousel from "./Carousel";
import {PopUpContext} from "../../../contexts/PopUpContext";
import office1 from "../../../assets/images/office1.jpg";
import office2 from "../../../assets/images/office2.jpg";
import office3 from "../../../assets/images/office3.jpg";
import office4 from "../../../assets/images/office4.jpg";

/** Controller which contains logic for Carousel component*/
const CarouselController: React.FC =() => {

    const {onOpenPopUp} = useContext(PopUpContext);

    /** List of images displayed in carousel */
    const images = [office1, office2, office3, office4];

    /** Currently displayed images */
    const [activeImages, setActiveImages] = useState([0, 1]);
    const [isAnimating, setIsAnimating] = useState(false);

    /** Function for opening pop up after several clicks */
    const handlePopUpOpen = () => {
        onOpenPopUp({
            header: 'Lorem Ipsum',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi id lorem semper dapibus. Maecenas et diam felis. Maecenas iaculis vehicula justo et efficitur.'
        });
    }

    const swipeImagesLeft = () => {
        /** Starting animation of carousel images */
        setIsAnimating(true);

        /** Condition for opening pop up */
        if(activeImages[1] === images.length - 1) {
            handlePopUpOpen();
        }

        /** Logic for looping images */
        setActiveImages(prevState => {
            if (prevState[1] === images.length - 1) {
                return [prevState[0] + 1, 0];
            } else if (prevState[0] === images.length - 1) {
                return [prevState[1], prevState[1] + 1];
            } else {
                return [prevState[0] + 1, prevState[1] + 1];
            }
        })

        /** Finishing images animation after 0.5s*/
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }

    /** Function for swiping images to the right. It works the same as the above function but in the opposite
     * direction
     * */
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
        <Carousel
            images={images}
            activeImages={activeImages}
            isAnimating={isAnimating}
            swipeImagesLeft={swipeImagesLeft}
            swipeImagesRight={swipeImagesRight}
        />
    )
};

export default CarouselController;