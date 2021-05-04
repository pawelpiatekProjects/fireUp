import React from "react";
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
import {
    UserOutlined,
    MenuOutlined,
    CloseOutlined,
    HomeOutlined,
    CloudOutlined,
    ProfileOutlined
} from "@ant-design/icons";


interface IActiveStyles {
    [key: string]: string;
}

interface Props {
    activeStyle: IActiveStyles;
    token: string;
    accountActiveStyle: IActiveStyles;
    toggleSideDrawer: () => void;
    isSideDrawerOpen: boolean;
}

/** Custom navigation component */
const Navigation: React.FC<Props> = (
    {activeStyle, token, accountActiveStyle, toggleSideDrawer, isSideDrawerOpen}
) => {

    return (
        <NavigationWrapper>
            {/* Navigation for large devices */}
            <NavigationLarge>
                <Nav>
                    <NavItem>
                        <NavLink to='/home' activeStyle={activeStyle}>HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#'>MENU2</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#'>MENU3</NavLink>
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
                    ) : (
                        <NavLink to='/signIn' activeStyle={accountActiveStyle}>
                            <UserOutlined/>
                        </NavLink>
                    )}
                </NavAccount>
            </NavigationLarge>
            {/* Navigation for small devices */}
            <NavigationSmall>
                <MenuOutlined onClick={() => toggleSideDrawer()}/>
            </NavigationSmall>
            <SideDrawer isOpen={isSideDrawerOpen}>
                <CloseOutlined onClick={() => toggleSideDrawer()}/>
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
                        {/* path is different whether user is authenticated or not */}
                        <NavLink to={token ? '/account' : '/signIn'} onClick={() => toggleSideDrawer()}><UserOutlined/>Account</NavLink>
                    </SideDrawerNavigationItem>
                </SideDrawerNavigation>
            </SideDrawer>
        </NavigationWrapper>
    )
};

export default Navigation;