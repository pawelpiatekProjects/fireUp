import React from "react";
import { Menu } from 'antd';
import {NavLink, useLocation} from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useCookies} from "react-cookie";
import {useHistory} from "react-router";

const {SubMenu} = Menu;

const TopNav: React.FC = () => {
    const location = useLocation().pathname.split('/')[1];
    console.log('location', location);
    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const {token} = cookies;
    console.log(token);

    // TODO move to controller
    const handleLogOut = () => {
        removeCookie('token');
        history.push('/signIn');
    }

    return (
        <Menu mode='horizontal' selectedKeys={[location]}>
            <Menu.Item key='home'>
                <NavLink to='/home'>Home</NavLink>
            </Menu.Item>
            <Menu.Item key='menu2'>
                <NavLink to='/#'>Menu2</NavLink>
            </Menu.Item>
            <Menu.Item key='menu3'>
                <NavLink to='/#'>Menu3</NavLink>
            </Menu.Item>
            <Menu.Item key='weather'>
                <NavLink to='/weather'>Weather</NavLink>
            </Menu.Item>
            {token ? (
                <SubMenu icon={<UserOutlined />}>
                    <Menu.ItemGroup>
                        <Menu.Item key="accountGroup">
                            <NavLink to='/account'>Account</NavLink>
                        </Menu.Item>
                        <Menu.Item key="logOut" onClick={() => handleLogOut()}>Log Out</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            ): (
                <Menu.Item key='account'>
                    <NavLink to='/signIn'>
                        <UserOutlined/>
                    </NavLink>
                </Menu.Item>
            )}
        </Menu>
    )
};

export default TopNav;