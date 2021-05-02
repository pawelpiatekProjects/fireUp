import styled from "styled-components";
import { Layout} from 'antd';
import * as variables from '../../assets/styles/variables';

const {Content} = Layout;



export const ContentWrapper = styled(Content)`
  //padding: 0 5rem;
  background: ${variables.colorLight};
  
`;

export const CardsWrapper = styled.div`
  //padding: 8rem 0;
  margin-bottom: 5rem;
  background: ${variables.primaryGray};
  //height: 50rem;
`;

export const ImagesRowWrapper = styled.div`
  //padding: 3rem;
  margin-bottom: 5rem;
`;

export const CarouselWrapper = styled.div`

`;

export const Footer = styled.div`
  height: 5rem;
  background: ${variables.primaryYellow};
`;

