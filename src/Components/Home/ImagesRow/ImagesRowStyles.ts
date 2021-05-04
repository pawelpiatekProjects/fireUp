import styled from "styled-components";

interface IImages {
    img: string;
    color: string;
}

export const Image = styled.div<IImages>`
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