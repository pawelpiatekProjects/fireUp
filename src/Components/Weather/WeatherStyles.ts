import styled from "styled-components";
import {Card, Input} from 'antd';
import * as variables from '../../assets/styles/variables';
import weather from '../../assets/images/weather.jpg';

const {Search} = Input;

export const WeatherWrapper = styled.div`
  background-image: linear-gradient(0deg, ${variables.primaryBlue}, ${variables.primaryBlue}), url(${weather});
  background-image:  url(${weather});
  background-size: cover;
  background-position: center;
  height: 100%;
`;

export const SearchInput = styled(Search)`
  margin-top: 3rem;
  box-shadow: ${variables.boxShadowPrimary};
`;

export const CardItem = styled(Card)`
  margin-top: 3rem;
  border-radius: 1rem;
  background: rgba( 116, 140, 183, 0.35 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
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

export const WeatherImg = styled.img`
  @media(max-width: ${variables.breakpoints.sm}) {
    width: 10rem;
  }
`;

export const Temperature = styled.h1`
  
  font-size: 10rem;
  position: relative;
  color: ${variables.primaryBlue};
  
  @media(max-width: ${variables.breakpoints.sm}) {
    font-size: 7rem;
  }
  
  &:after {
    content: 'o';
    position: absolute;
    font-size: 4rem;
    top: 2rem;

    @media(max-width: ${variables.breakpoints.sm}) {
      top: 1rem;
    }
  }
`;