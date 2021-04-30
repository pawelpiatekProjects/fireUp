import styled from "styled-components";
import {Card} from 'antd';
import * as variables from '../../assets/styles/variables';

const CardItem = styled(Card)`
  margin-top: 3rem;
  border-radius: 1rem;
  box-shadow: ${variables.boxShadowPrimary};
`;

export const EmptyWeatherCard = styled(CardItem)`
  
  h3{
    text-align: center;
  }
  
  svg {
    font-size: 7rem;
    color: ${variables.primaryGray};
  }
`;

export const WeatherCard = styled(CardItem)`
    
`;

export const Temperature = styled.div`
  
  font-size: 10rem;
  position: relative;
  
  &:after {
    content: 'o';
    position: absolute;
    font-size: 4rem;
    top: 2rem;
  }
`;