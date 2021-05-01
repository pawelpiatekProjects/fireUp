import React from "react";
import { Menu } from 'antd';
import {NavLink, useLocation} from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useCookies} from "react-cookie";

const TopNav: React.FC = () => {
    const location = useLocation().pathname.split('/')[1];
    console.log('location', location);

    const [cookies] = useCookies(['token']);
    const {token} = cookies;
    console.log(token);

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
            <Menu.Item key='avatar'>
                <NavLink to={token ? '/account' : '/signIn'}>
                    <Avatar size="small" icon={<UserOutlined />} />
                </NavLink>
            </Menu.Item>
        </Menu>
    )
};

export default TopNav;