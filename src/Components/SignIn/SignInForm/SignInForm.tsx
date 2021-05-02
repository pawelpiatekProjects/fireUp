import React from "react";
import {Formik, Field, Form, FieldProps} from "formik";
import * as Yup from 'yup';
import {Input, Card, Button, Typography, Row, Col, Space} from 'antd';
import {SpaceWrapper, ErrorMessage, CardWrapper, FieldWrapper} from './SignInFormStyles';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const {Title, Text} = Typography;

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Email is required')
        .email('Invalid email'),
    password: Yup.string()
        .min(8, 'Too Short')
        .max(20, 'Too Long')
        .required('Password is required'),
});

interface Props {
    handleSubmit: (email: string, password: string) => void;
    isLoading: boolean;
}

const SignInForm: React.FC<Props> = ({handleSubmit, isLoading}) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={SignInSchema}
            onSubmit={({email, password}) => {
                 handleSubmit(email, password);
            }}
        >
            {({errors, touched, isValid, dirty}) => (
                <CardWrapper>
                    <Row>
                        <Col
                            xl={{span:16, offset:4}}
                            lg={{span:16, offset:4}}
                            md={{span: 20, offset: 2}}
                            sm={{span: 20, offset: 2}}
                            xs={{span: 22, offset: 1}}
                        >
                            <SpaceWrapper direction='vertical' size={20} >
                                <Title level={3} type='secondary'>Sign In</Title>
                                <Form>
                                    <FieldWrapper>
                                        <Field name='email' placeholder='your e-mail'>{({field}: FieldProps) => (
                                            <Input {...field} prefix={<UserOutlined/>} placeholder='Enter your e-mail'/>
                                        )}</Field>
                                        {errors.email && touched.email ? <ErrorMessage >{errors.email}</ErrorMessage> : <ErrorMessage/>}
                                    </FieldWrapper>
                                     <FieldWrapper>
                                         <Field name='password' placeholder='your password'>{({field}: FieldProps) => (
                                             <Input.Password {...field} prefix={<LockOutlined/>} placeholder='Enter your password'/>
                                         )}</Field>
                                         {errors.password && touched.password ? <ErrorMessage>{errors.password}</ErrorMessage> : <ErrorMessage/>}
                                     </FieldWrapper>
                                        <Button
                                            loading={isLoading}
                                            htmlType="submit"
                                            block
                                            type='primary'
                                            disabled={!(isValid && dirty)}
                                        >
                                            Sign in
                                        </Button>

                                </Form>
                            </SpaceWrapper>
                        </Col>
                    </Row>
                </CardWrapper>
            )}
        </Formik>
    )
}

export default SignInForm;