import React from "react";
import {Alert, Button, Col, Form, Modal, Row, Spinner} from "react-bootstrap";
import useTicketData from "../../hooks/useTicketData";
import useTicketAction from "../../hooks/useTicketAction";
import * as yup from "yup";
import {ErrorMessage, Field, Formik} from 'formik';
import {WysiwygEditor} from "ergolib-ts"

export const AddTicketForm = () => {
    const {create: {error, loading}} = useTicketData()
    const {createTicket} = useTicketAction()

    const onSubmit = (values) => {
        debugger
        createTicket(values)
    }

    const validationSchema = yup.object({
        subject: yup
            .string()
            .required(),
        issueDate: yup
            .string()
            .required(),
        message: yup
            .string()
            .required(),
    })

    return (
        <Formik
            initialValues={{
                subject: "",
                issueDate: "",
                message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({
                  handleSubmit,
                  isValid,
                  dirty
              }) => (
                <Modal
                    show
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Add New Ticket
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {/*{successMsg && <Alert variant="primary">{successMsg}</Alert>}*/}
                            {loading && <Spinner variant="primary" animation="border"/>}
                            <Form.Group as={Row} className={'mb-2'}>
                                <Form.Label column sm={3}>
                                    Subject
                                </Form.Label>
                                <Col sm={9}>
                                    <Field
                                        name="subject"
                                        placeholder="Subject"
                                        as={Form.Control}
                                    />
                                    <Form.Text className="text-danger">
                                        <ErrorMessage name={'subject'}/>
                                    </Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className={'mb-2'}>
                                <Form.Label column sm={3}>
                                    Issue Found
                                </Form.Label>
                                <Col sm={9}>
                                    <Field
                                        type="date"
                                        name="issueDate"
                                        as={Form.Control}
                                    />
                                    <Form.Text className="text-danger">
                                        <ErrorMessage name={'issueDate'}/>
                                    </Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Describe</Form.Label>
                                <Field
                                    rows="5"
                                    name="message"
                                    component={WysiwygEditor}
                                />
                                <Form.Text className="text-danger">
                                    <ErrorMessage name={'message'}/>
                                </Form.Text>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" variant="primary">
                                Open Ticket
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            )}
        </Formik>
    )
}