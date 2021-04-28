import styled from "styled-components";
import { Layout, Row } from 'antd';

const {Content} = Layout;

export const ContentWrapper = styled(Content)`
  padding: 3rem;
`;

export const Intro = styled.div`
  width: 80%;
  margin: 0 auto;
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
`;


export const IntroButtons = styled.div`
  display: flex;
  flex-direction: column;
  
  button {
    margin: 1rem 0;
  }
`;

export const IntroContent = styled.div`
  
 
`;