import styled from "styled-components";
import * as variables from '../../../assets/styles/variables';

interface ICarouselItem {
    img: string;
    isAnimating: boolean;
}

interface ICarouselItemButton {
    mode: 'left' | 'right';
}

export const CarouselWrapper = styled.div`
  width: 100%;
`;

const CarouselItem = styled.div<ICarouselItem>`
  width: 100%;
  height: 50rem;
  background-image: ${props => `url(${props.img})`};
  filter: grayscale(100%);
  background-size: cover;
  position: relative;
  transition: all .6s;
  
  opacity: ${props => props.isAnimating ? '.4' : '1'};
  transform: ${props => props.isAnimating ? 'rotateY(90deg)' : 'rotateY(0)'};


  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${variables.colorLightRgba};
    content: '';
    z-index: 0;
    transition: all .5s;
  }
  
  
  &:hover:after {
    background: ${variables.primaryYellow};
  }
  
  @media(max-width: ${variables.breakpoints.lg}) {
    height: 30rem;
  }
  
`;

export const CarouselItemLeft = styled(CarouselItem)`
  transform-origin: right;
    &:after {
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    }
`;

export const CarouselItemRight = styled(CarouselItem)`
  transform-origin: left;
  &:after {
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
  }
`;

export const CarouselItemButton = styled.button<ICarouselItemButton>`
  position: absolute;
  ${props => props.mode === 'left' ? 'left: 1rem': 'right: 1rem'};
  bottom: 1rem;
  z-index: 1;
  
  background: transparent;
  border: none;
  
  font-size: 6rem;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    cursor: pointer;
  }
`;


