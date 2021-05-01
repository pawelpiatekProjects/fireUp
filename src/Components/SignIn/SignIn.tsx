import React from "react";
import TopNav from "../TopNav/TopNav";
import SignInForm from "./SignInForm/SignInForm";
import {Row, Col, Space} from 'antd';

interface Props {
    handleSubmit: (email: string, password: string) => void;
    isLoading: boolean;
}

const SignIn: React.FC<Props> = ({handleSubmit, isLoading}) => {
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
                    <SignInForm handleSubmit={handleSubmit} isLoading={isLoading}/>
                </Col>
            </Row>
        </>
    )
};

export default SignIn;