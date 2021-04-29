import styled from "styled-components";
import {Card, Col, Row, Button} from 'antd';
import * as variables from '../../../assets/styles/variables';

interface ICardButton {
    background: string;
    color: string;
    isActive: boolean;
}

export const MainRow = styled(Row)`
  height: 100%;
  width: 100%;
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
  top: -15rem;
  right: -20rem;
  z-index: 1;
  transform: rotate(45deg);
`;

export const CardButton = styled.button<ICardButton>`
  padding: 2rem 3rem;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 1rem;
  background: ${props => props.background};
  color: ${props => props.color};
  border: none;
  transition: transform .3s;
  box-shadow: ${props => props.isActive ? variables.boxShadowPrimary : 'none'};
  
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: ${variables.boxShadowPrimary};
  }
`;