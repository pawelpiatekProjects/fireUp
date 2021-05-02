import React from "react";
import {NavLink, useLocation} from 'react-router-dom';
import {
    NavigationWrapper,
    Nav,
    NavItem,
    NavAccount
} from './NavigationStyles';
import * as variables from '../../assets/styles/variables';
import {UserOutlined} from "@ant-design/icons";
import {useHistory} from "react-router";
import {useCookies} from "react-cookie";


const Navigation: React.FC = () => {

    const activeStyle = {
        background: variables.secondaryYellow,
        color: variables.colorLight
    }

    const accountActiveStyle = {
        color: variables.secondaryYellow
    }

    const location = useLocation().pathname.split('/')[1];
    console.log('location', location);
    const history = useHistory();

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const {token} = cookies;



    return (
        <NavigationWrapper>
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
        </NavigationWrapper>
    )
};

export default Navigation;