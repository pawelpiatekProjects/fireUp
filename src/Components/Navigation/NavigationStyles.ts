import styled from "styled-components";
import * as variables from '../../assets/styles/variables';

export const NavigationWrapper = styled.nav`
  width: 100%;
  position: relative;
  //top: 0;
  //left: 0;
  background: ${variables.colorLight};
  z-index: 10;
  box-shadow: ${variables.boxShadowSecondary};
  
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  
`;

export const NavItem = styled.li`
  margin: 0 2rem;
  padding: 2rem 1.5rem;
  a {

    padding: 2rem 1.5rem;
    font-size: 1.8rem;
    transition: all .3s;
    border-radius: 1rem;
    color: ${variables.secondaryGray};

    &:hover {
      background: ${variables.secondaryYellow};
      color: ${variables.colorLight};

    }
  }
  
`;

export const NavAccount = styled.div`
  position: absolute; 
  top: 50%;
  right: 3rem;
  transform: translateY(-50%);
  transition: all .3s;
  
  a {
    font-size: 2.5rem;
    color: ${variables.secondaryGray};
    
    &:hover {
      color: ${variables.secondaryYellow};
    }
  }
`;
