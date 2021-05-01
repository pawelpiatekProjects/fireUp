import React, {useContext, useEffect, useState} from "react";
import TopNav from "../TopNav/TopNav";
import axios from "axios";
import {User} from '../../mocks/shared/interfaces';
import {Row, Col, Card, Avatar} from 'antd';
import {useHistory} from "react-router";
import {PopUpContext} from "../../contexts/PopUpContext";
import account from '../../assets/images/account.png';

const { Meta } = Card;

const Account: React.FC = () => {

    const [userData, setUserData] = useState({} as User);
    const history = useHistory();
    const {onOpenPopUp} = useContext(PopUpContext);

    const fetchUserData = async() => {
        try {
            const {data: {user}} = await axios.get<{user: User}>('/user');
            console.log(user);
            setUserData(user);
        } catch (e) {
            //TODO add error handling
            console.log(e);
            onOpenPopUp({
                header: 'Authentication error',
                message: 'Authentication data are invalid'
            });
            history.push('/signIn');
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
            <TopNav/>
            <Row>
                <Col
                    xl={{span: 12, offset: 6}}
                    lg={{span: 12, offset: 6}}
                    md={{span: 16, offset: 4}}
                    sm={{span: 20, offset: 2}}
                    xs={{span: 22, offset: 1}}
                >

                    <Card
                        cover={
                            <img
                                alt="example"
                                src={account}
                            />
                        }
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={`Hi ${userData.login}`}
                            description="This is the description"
                        />
                    </Card>,
                </Col>
            </Row>
        </>
    )
};

export default Account;