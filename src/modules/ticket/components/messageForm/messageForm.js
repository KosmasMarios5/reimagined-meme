import React from "react";
import PropTypes from "prop-types";
import {Button, Form} from "react-bootstrap";
import {ErrorMessage, Field, FormikProvider, useFormik} from "formik";
import * as yup from "yup";
import {WysiwygEditor} from "ergolib-ts";
import useTicketAction from "../../hooks/useTicketAction";

const validationSchema = yup.object({
    message: yup
        .string()
        .required(),
})

export const MessageForm = ({id}) => {
    const {replyToTicket} = useTicketAction()
    const onSubmit = (values) => {
        replyToTicket(id, values)
    };
    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    })
    return (
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Field
                        name="message"
                        component={WysiwygEditor}
                    />
                    <Form.Text className="text-danger">
                        <ErrorMessage name={'message'}/>
                    </Form.Text>
                </Form.Group>
                <div className="text-end mb-2">
                    <Button variant="primary" type="submit">
                        Reply
                    </Button>
                </div>
            </Form>
        </FormikProvider>
    )
}

MessageForm.propTypes =
    {
        id: PropTypes.string.isRequired,
    }
;
