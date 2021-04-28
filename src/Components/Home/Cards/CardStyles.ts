import styled from "styled-components";
import {Card, Col, Row} from 'antd';
import * as variables from '../../../assets/styles/variables';

export const MainRow = styled(Row)`
  height: 100%;
`;

export const CardWrapper = styled.div`
  position: relative;
`;

export const CardElement = styled(Card)`
  border-radius: 2rem;
  box-shadow: 0 0 18px -4px ${variables.secondaryBlue};
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