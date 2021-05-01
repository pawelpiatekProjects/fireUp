import React from "react";
import {Formik, Field, Form, FieldProps} from "formik";
import * as Yup from 'yup';
import {Input, Card, Button, Typography, Row, Col, Space} from 'antd';
import {SpaceWrapper, ErrorMessage, CardWrapper} from './SignInFormStyles';

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
}

const SignInForm: React.FC<Props> = ({handleSubmit}) => {
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
                                <Title level={3}>Sign In</Title>
                                <Form>
                                    <SpaceWrapper direction='vertical'  >
                                        <Field name='email' placeholder='your e-mail'>{({field}: FieldProps) => (
                                            <Input {...field}/>
                                        )}</Field>
                                        {errors.email && touched.email ? <ErrorMessage type='danger'>{errors.email}</ErrorMessage> : null}
                                        <Field name='password' placeholder='your password'>{({field}: FieldProps) => (
                                            <Input {...field}/>
                                        )}</Field>
                                        {errors.password && touched.password ? <ErrorMessage type='danger'>{errors.password}</ErrorMessage> : null}

                                        <Button htmlType="submit" block type='primary' disabled={!(isValid && dirty)}>Sign in</Button>
                                    </SpaceWrapper>
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