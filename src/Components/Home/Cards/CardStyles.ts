import styled from "styled-components";
import {Card, Col, Row, Button} from 'antd';
import * as variables from '../../../assets/styles/variables';

interface ICardButton {
    background: string;
    color: string;
    isActive: boolean;
}

export const MainRow = styled(Row)`
  padding: 5rem 0;
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const CardElement = styled(Card)`
  border-radius: 2rem;
  box-shadow: ${variables.boxShadowPrimary};
  z-index: 2;
  
`;

export const CardImg = styled.img`
  width: 40rem;
  position: absolute;
  bottom: 0;
  left: 30%;
  z-index: 1;
  transform:  rotate(45deg) ;
  
`;

export const CardButton = styled.button<ICardButton>`
  padding: 2rem 3rem;
  font-size: 2.5rem;
  font-weight: bold;
  border-radius: 1rem;
  background: ${props => props.background};
  color: ${props => props.color};
  border: none;
  transition: transform .3s;
  box-shadow: ${props => props.isActive ? variables.boxShadowPrimary : 'none'};
  width: 80%;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: ${variables.boxShadowPrimary};
  }
  
  @media(max-width: ${variables.breakpoints.lg}) {
    font-size: 1.75rem;
    width: 100%;
  }
  
  @media(max-width: ${variables.breakpoints.md}) {
    padding: 1rem 1.5rem;
  }
`;