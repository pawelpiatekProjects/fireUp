import styled from "styled-components";
import * as variables from '../../assets/styles/variables';


interface IWrapper {
    isOpen: boolean
}

export const Wrapper = styled.div<IWrapper>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const Modal = styled.div`
  width: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.colorLight};
  
  @media(max-width: ${variables.breakpoints.lg}) {
    width: 60%;
  }

  @media(max-width: ${variables.breakpoints.sm}) {
    width: 80%;
  }

`;

export const ModalHeader = styled.h2`
  width: 100%;
  border-bottom: 1px solid ${variables.primaryGray};
  padding: 2rem;

  @media(max-width: ${variables.breakpoints.lg}) {
    font-size: 1.8rem;
  }
  
`;

export const ModalContent = styled.p`
  padding: 2rem;
  border-bottom: 1px solid ${variables.primaryGray};
  margin: 0;

  @media(max-width: ${variables.breakpoints.lg}) {
    font-size: 1.6rem;
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background: ${variables.backdropBackground};
`;

export const ButtonsRow = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  button {
    margin-left: 1rem;

    @media(max-width: ${variables.breakpoints.lg}) {
      font-size: 1.6rem;
    }
  }
`;