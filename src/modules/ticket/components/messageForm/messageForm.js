import React, {useState} from "react";
import PropTypes from "prop-types";
import {Button, Form} from "react-bootstrap";

// import { replyOnTicket } from "../../pages/ticket-list/ticketsAction";

export const MessageForm = ({id}) => {
    // const {
    //   user: { name },
    // } = useSelector((state) => state.user);
    //
    const name = 'marios'
    const [message, setMessage] = useState("");

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const msgObj = {
            message,
            sender: name,
        };

        // dispatch(replyOnTicket(_id, msgObj));
        setMessage("");
    };

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Control
                value={message}
                onChange={handleOnChange}
                as="textarea"
                row="5"
                name="detail"
                placeholder={"Your message"}
                className={'me-3'}
            />
            <div className="text-right">
                <Button size={'sm'} variant="primary" type="submit">
                    Reply
                </Button>
            </div>
        </Form>
    )
}

MessageForm.propTypes = {
    id: PropTypes.string.isRequired,
};
