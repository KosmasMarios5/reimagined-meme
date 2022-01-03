import React, {useEffect} from "react";
import {Alert, Button, Col, Form, Modal, Row, Spinner} from "react-bootstrap";
import useTicketData from "../../hooks/useTicketData";
import useTicketAction from "../../hooks/useTicketAction";
import * as yup from "yup";
import {ErrorMessage, Field, Formik} from 'formik';
import {getRouteUrl, WysiwygEditor} from "ergolib-ts"
import {Link} from "react-router-dom";
import {ROUTE_PAGE_TICKET_DETAILS} from "../../routes";

type Props = {
    show: boolean,
    onHide: Function
}

const CreateModal = (props: Props) => {
    const {show, onHide} = props
    const {create: {error, loading, newItemId}} = useTicketData()
    const {byId} = useTicketData({id: newItemId})
    const {createTicket, clearCreateTicketData} = useTicketAction()

    const onSubmit = (values) => {
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

    useEffect(() => {
        return () => {
            clearCreateTicketData()
        }
    }, [])

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
                    show={show}
                    onHide={onHide}
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
                            {byId && (
                                <Alert variant="primary">
                                    <span>Your ticket was created successfully. You can view it's details by using this link </span>
                                    <Link
                                        to={getRouteUrl(ROUTE_PAGE_TICKET_DETAILS, {id: byId.id})}><strong>#{byId.id}</strong></Link>
                                </Alert>
                            )}
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
                            {loading && <Spinner variant="primary" animation="border"/>}
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

export default CreateModal