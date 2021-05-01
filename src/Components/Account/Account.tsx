import React, {useEffect} from "react";
import TopNav from "../TopNav/TopNav";
import axios from "axios";
import {Row, Col} from 'antd';

const Account: React.FC = () => {

    const fetchUserData = async() => {
        try {
            const {data} = await axios.get('/user');
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
            <Row>
                <Col >
                    <TopNav/>
                    <h1>User account</h1>
                </Col>
            </Row>
        </>
    )
};

export default Account;