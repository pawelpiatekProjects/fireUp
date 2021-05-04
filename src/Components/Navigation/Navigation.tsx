import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import {
    NavigationWrapper,
    Nav,
    NavItem,
    NavAccount,
    NavigationLarge,
    NavigationSmall,
    SideDrawer,
    SideDrawerNavigation,
    SideDrawerNavigationItem
} from './NavigationStyles';
import * as variables from '../../assets/styles/variables';
import {UserOutlined, MenuOutlined, CloseOutlined, HomeOutlined, CloudOutlined, ProfileOutlined} from "@ant-design/icons";
import {useCookies} from "react-cookie";


const Navigation: React.FC = () => {

    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

    const toggleSideDrawer = () => {
        setIsSideDrawerOpen(prevState => !prevState)
    }

    const activeStyle = {
        background: variables.secondaryYellow,
        color: variables.colorLight
    }

    const accountActiveStyle = {
        color: variables.secondaryYellow
    }

    const [cookies] = useCookies(['token']);
    const {token} = cookies;



    return (
        <NavigationWrapper>
            <NavigationLarge>
                <Nav>
                    <NavItem>
                        <NavLink to='/home' activeStyle={activeStyle}>HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#' >MENU2</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#' >MENU3</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/weather' activeStyle={activeStyle}>WEATHER</NavLink>
                    </NavItem>
                </Nav>
                <NavAccount>
                    {token ? (
                        <NavLink to='/account' activeStyle={accountActiveStyle}>
                            <UserOutlined/>
                        </NavLink>
                    ): (
                        <NavLink to='/signIn' activeStyle={accountActiveStyle}>
                            <UserOutlined/>
                        </NavLink>
                    )}
                </NavAccount>
            </NavigationLarge>
            <NavigationSmall>
                <MenuOutlined onClick={()=> toggleSideDrawer()}/>
            </NavigationSmall>
            <SideDrawer isOpen={isSideDrawerOpen}>
                <CloseOutlined onClick={()=> toggleSideDrawer()}/>
                <SideDrawerNavigation>
                    <SideDrawerNavigationItem>
                        <NavLink to='/home' onClick={() => toggleSideDrawer()}><HomeOutlined/>Home</NavLink>
                    </SideDrawerNavigationItem>
                    <SideDrawerNavigationItem>
                        <NavLink to='#'><ProfileOutlined/>Menu2</NavLink>
                    </SideDrawerNavigationItem>
                    <SideDrawerNavigationItem>
                        <NavLink to='#'><ProfileOutlined/>Menu3</NavLink>
                    </SideDrawerNavigationItem>
                    <SideDrawerNavigationItem>
                        <NavLink to='/weather' onClick={() => toggleSideDrawer()}><CloudOutlined/>Weather</NavLink>
                    </SideDrawerNavigationItem>
                    <SideDrawerNavigationItem>
                        {token ? (
                            <NavLink to='/account' onClick={() => toggleSideDrawer()}><UserOutlined/>Account</NavLink>
                        ): (
                            <NavLink to='/signIn' onClick={() => toggleSideDrawer()}><UserOutlined/>Account</NavLink>
                        )}

                    </SideDrawerNavigationItem>
                </SideDrawerNavigation>
            </SideDrawer>
        </NavigationWrapper>
    )
};

export default Navigation;