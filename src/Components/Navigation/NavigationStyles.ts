import styled from "styled-components";
import * as variables from '../../assets/styles/variables';

interface ISideDrawer {
    isOpen: boolean;
}

export const NavigationWrapper = styled.nav`
  width: 100%;
  position: relative;
  height: 100%;
  background: ${variables.colorLight};
  z-index: 10;
  box-shadow: ${variables.boxShadowSecondary};
`;

export const NavigationLarge = styled.div`
  height: 100%;
  @media(max-width: ${variables.breakpoints.lg}) {
    display: none;
  }
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
`;

export const NavItem = styled.li`
  margin: 0 2rem;
  padding: 2rem 1.5rem;
  a {
    height: 100%;
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

export const NavigationSmall = styled.div`
  display: none;
  height: 100%;
  @media(max-width: ${variables.breakpoints.lg}) {
    width: 20%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 3rem;
    font-size: 2rem;
  }
`;

export const SideDrawer = styled.div<ISideDrawer>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 30%;
  background: ${variables.colorLight};
  box-shadow: ${variables.boxShadowSecondary};
  padding: 3rem;
  transition: transform .3s;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-200rem)'};
  
  @media(max-width: ${variables.breakpoints.sm}) {
    width: 50%;
  }
`;

export const SideDrawerNavigation = styled.ul`
  list-style: none;
  margin-top: 3rem;
`;

export const SideDrawerNavigationItem = styled.li`
  margin: 1rem 0;
  a{
    font-size: 2rem;
    color: ${variables.secondaryGray};
    
    svg {
      margin-right: .75rem;
    }
  }
`;
