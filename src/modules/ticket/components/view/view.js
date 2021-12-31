// @flow
import React, {Fragment} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import type {Ticket} from "../../types/types";
import {formatDate} from 'ergolib-ts'
import {MessageHistory} from "../messageHistory/messageHistory";
import {MessageForm} from "../messageForm/messageForm";

type Props = {
    ticket: Ticket,
    onClose: Function
}

const View = (props: Props) => {
    const {ticket: {subject, status, openAt, conversations, id}, onClose} = props
    return (
        <Fragment>
            <Row>
                <Col md={4}>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="status"><strong>Status:</strong> {status}</div>
                        <Button
                            variant="warning"
                            onClick={onClose}
                            disabled={status === "Closed"}
                        >
                            Close Ticket
                        </Button>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <strong>Ticket Opened:</strong> {openAt && formatDate(openAt, formatDate.formatTypes.TITLE_HALF)}
                    </div>
                    <div className="subject">
                        <strong>Subject:</strong>
                        <p>
                            {subject}
                        </p>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="conversation">
                        <div className="conversation__history">
                            {conversations && (
                                <MessageHistory msg={conversations}/>
                            )}
                        </div>
                        <MessageForm id={id}/>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default View;