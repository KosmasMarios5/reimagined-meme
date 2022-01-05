// @flow
import React, {Fragment} from 'react';
import {Breadcrumb, Button, Col, Row} from "react-bootstrap";
import type {Ticket} from "../../types/types";
import {formatDate, getRouteUrl} from 'ergolib-ts'
import {MessageHistory} from "../messageHistory/messageHistory";
import {MessageForm} from "../messageForm/messageForm";
import {LinkContainer} from "react-router-bootstrap";
import {ROUTE_PAGE_TICKET_INDEX} from "../../routes";

type Props = {
    ticket: Ticket,
    onClose: Function
}

const View = (props: Props) => {
    const {ticket: {subject, status, openAt, conversations, id, timeline}, onClose} = props
    return (
        <Fragment>
            <Row>
                <Col md={6} className={'mt-2'}>
                    <Breadcrumb>
                        <LinkContainer to={getRouteUrl(ROUTE_PAGE_TICKET_INDEX)}>
                            <Breadcrumb.Item>Tickets</Breadcrumb.Item>
                        </LinkContainer>
                        <Breadcrumb.Item active>
                            <span>Ticket </span><strong>#{id}</strong>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="d-flex justify-content-between">
                        <div>
                            <strong>Status: </strong>
                            <span>{status}</span>
                            <div/>
                            <strong>Ticket Opened: </strong>
                            <span>{openAt && formatDate(openAt, formatDate.formatTypes.TITLE_HALF)}</span>
                        </div>
                        <div>
                            <Button
                                variant="danger"
                                onClick={onClose}
                                disabled={status === "Closed"}
                            >
                                Close Ticket
                            </Button>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <p>
                            {subject}
                        </p>
                    </div>
                </Col>
                <Col md={6}>
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