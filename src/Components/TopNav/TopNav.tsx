import React from "react";
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const TopNav: React.FC = () => {
    return (
        <Menu mode='horizontal'>
            <Menu.Item key='home'>
                <NavLink to='/'>Home</NavLink>
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
                <Avatar size="small" icon={<UserOutlined />} />
            </Menu.Item>
        </Menu>
    )
};

export default TopNav;