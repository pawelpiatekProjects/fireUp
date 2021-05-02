import React from "react";
import TopNav from "../TopNav/TopNav";
import {User} from '../../mocks/shared/interfaces';
import {Row, Col, Card, Avatar, Divider, Typography, Button} from 'antd';
import {LogoutOutlined} from '@ant-design/icons'
import {AccountWrapper,AccountCard} from './AccountStyles';

const { Meta } = Card;
const {Paragraph, Text} = Typography;

interface Props {
    userData: User;
    onLogOut: () => void;
}

const Account: React.FC<Props> = ({userData, onLogOut}) => {
    return (
        <AccountWrapper>
            <Row>
                <Col
                    xl={{span: 12, offset: 6}}
                    lg={{span: 12, offset: 6}}
                    md={{span: 16, offset: 4}}
                    sm={{span: 20, offset: 2}}
                    xs={{span: 22, offset: 1}}
                >
                    <AccountCard loading={userData.login === undefined} actions={[
                        <Button
                            key='logOut'
                            type='primary'
                            onClick={() => onLogOut()}
                        >
                            Log Out<LogoutOutlined />
                        </Button>

                    ]}>
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={`Hi: ${userData.login}`}
                        />
                        <Divider/>
                        <Paragraph>
                            <Text strong>Name: </Text>
                            {userData.name}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>Last name: </Text>
                            {userData.lastName}
                        </Paragraph>
                        <Paragraph>
                            <Text strong>E-mail: </Text>
                            {userData.email}
                        </Paragraph>
                    </AccountCard>
                </Col>
            </Row>
        </AccountWrapper>
    )
};

export default Account;