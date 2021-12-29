//@flow
import React, {useState} from 'react';
import * as yup from 'yup'
import {FormikProvider, useFormik} from "formik";
import {useTranslation} from "react-i18next";
import {Alert, Button, ButtonGroup, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import useUserData from "../../hooks/useUserData";
import useUserAction from "../../hooks/useUserAction";

const Login = () => {
    const {t} = useTranslation()
    const [forgotPassword, setForgotPassword] = useState(false)

    const {loading, errorLogin} = useUserData()
    const {userLogin} = useUserAction()

    const onSubmit = (values) => {
        userLogin(values)
    }

    const validationSchema = yup.object({
        username: yup
            .string()
            .required(t('required')),
        password: yup
            .string()
            .required(t('required')),
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            rememberMe: false,
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    })

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Container>
                    {!forgotPassword && (
                        <Row>
                            <Col>
                                <h1 className="text-info text-center">Login</h1>
                                <hr/>
                                {errorLogin && (
                                    <Alert variant="danger">
                                        <strong>{t(errorLogin)}</strong>
                                    </Alert>
                                )}
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        required
                                        id={'username'}
                                        name={'username'}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                    />
                                </Form.Group>
                                <Form.Group className={'mb-3'}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                        id={'password'}
                                        name={'password'}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                </Form.Group>
                                <Button type="submit">
                                    {t('login')}
                                </Button>
                                {loading && <Spinner variant="primary" animation="border"/>}
                                <div>
                                    <span>{t('Forgot your password?')}</span>
                                    {' '}
                                    <Button variant={"link"} onClick={() => setForgotPassword(true)}>
                                        {t('Press here')}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    )}
                    {forgotPassword && (
                        <Row>
                            <Col>
                                <h1 className="text-info text-center">Forgot Password</h1>
                                <hr/>
                                <Form.Group className={'mb-3'}>
                                    <Form.Label>{t('Email')}</Form.Label>
                                    <Form.Control
                                        type={'email'}
                                        placeholder="E-mail"
                                        id={'email'}
                                        name={'email'}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </Form.Group>
                                <ButtonGroup>
                                    <Button type="submit">
                                        {t('Reset')}
                                    </Button>
                                    <Button variant={"link"} onClick={() => setForgotPassword(false)}>
                                        {t('Cancel')}
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    )}
                </Container>
            </Form>
        </FormikProvider>
    );
};

export default Login