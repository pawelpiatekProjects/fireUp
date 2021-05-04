import styled from "styled-components";
import * as variables from '../../assets/styles/variables';

export const ContentWrapper = styled.div`
  background: ${variables.colorLight};
`;

export const CardsWrapper = styled.div`
  padding: 5rem 0;
  margin-bottom: 5rem;
  background: ${variables.primaryGray};
  
  @media(max-width: ${variables.breakpoints.md}) {
    padding: 0;
  }
`;

export const ImagesRowWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const Footer = styled.div`
  height: 5rem;
  background: ${variables.primaryYellow};
`;

