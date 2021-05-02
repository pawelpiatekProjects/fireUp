import React from "react";
import TopNav from "../TopNav/TopNav";
import SignInForm from "./SignInForm/SignInForm";
import {Row, Col, Space} from 'antd';
import {SignInWrapper, SignInFormWrapper} from './SignInStyles';

interface Props {
    handleSubmit: (email: string, password: string) => void;
    isLoading: boolean;
}

const SignIn: React.FC<Props> = ({handleSubmit, isLoading}) => {
    return (
        <SignInWrapper>
            <Row>
                <Col
                    xxl={{span: 6, offset: 9}}
                    xl={{span: 10, offset: 7}}
                    lg={{span: 12, offset: 6}}
                    md={{span: 16, offset: 4}}
                    sm={{span: 20, offset: 2}}
                    xs={{span: 22, offset: 1}}
                >
                    <SignInFormWrapper>
                        <SignInForm handleSubmit={handleSubmit} isLoading={isLoading}/>
                    </SignInFormWrapper>
                </Col>
            </Row>
        </SignInWrapper>
    )
};

export default SignIn;