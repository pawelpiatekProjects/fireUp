import React from "react";
import TopNav from "../TopNav/TopNav";
import {User} from '../../mocks/shared/interfaces';
import {Row, Col, Card, Avatar, Divider, Typography} from 'antd';
import {AccountWrapper,AccountCard} from './AccountStyles';

const { Meta } = Card;
const {Paragraph, Text} = Typography;

interface Props {
    userData: User
}

const Account: React.FC<Props> = ({userData}) => {
    return (
        <AccountWrapper>
            <TopNav/>
            <Row>
                <Col
                    xl={{span: 12, offset: 6}}
                    lg={{span: 12, offset: 6}}
                    md={{span: 16, offset: 4}}
                    sm={{span: 20, offset: 2}}
                    xs={{span: 22, offset: 1}}
                >
                    <AccountCard loading={userData.login === undefined}>
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