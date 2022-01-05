// @flow
import React from 'react';
import {Button, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import type {Ticket} from "../../types/types";
import {formatDate} from 'ergolib-ts'
import {MessageHistory} from "../messageHistory/messageHistory";
import {MessageForm} from "../messageForm/messageForm";
import "./view.css"
import Timeline from "../timeline/timeline";
import FileAttachments from "../fileAttachments/fileAttachments";

type Props = {
    ticket: Ticket,
    onClose: Function
}

const View = (props: Props) => {
    const {ticket: {subject, status, openAt, conversations, id, timeline, attachments}, onClose} = props
    return (
        <div>
            <h2 className="d-flex justify-content-between border-bottom mb-2 mt-4 pb-2">
                <span>
                    <span>Ticket </span><strong>#{id}</strong>
                </span>
                <div>
                    <Button
                        variant="danger"
                        onClick={onClose}
                        disabled={status === "Closed"}
                    >
                        Close Ticket
                    </Button>
                </div>
            </h2>
            <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
                <Tab eventKey="details" title="Details" className={'tab-card p-3'}>
                    <div className="d-flex justify-content-between">
                        <small>
                            <strong>Status: </strong>
                            <span>{status}</span>
                            <div/>
                            <strong>Ticket Opened: </strong>
                            <span>{openAt && formatDate(openAt, formatDate.formatTypes.TITLE_HALF)}</span>
                        </small>

                    </div>
                    <hr/>
                    <div>
                        <p>
                            {subject}
                        </p>
                    </div>
                </Tab>
                <Tab eventKey="conversation" title="Conversation" className={'tab-card'}>
                    <Container fluid={true} className={'g-0'}>
                        <Row className={'g-0'}>
                            <Col sm={8}>
                                <div className="conversation">
                                    <div className="conversation__history">
                                        {conversations && (
                                            <MessageHistory msg={conversations}/>
                                        )}
                                    </div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className={'p-3'}>
                                    <MessageForm id={id}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="timeline" title="Timeline" className={'tab-card'}>
                    <Timeline data={timeline}/>
                </Tab>
                <Tab eventKey="attachments" title="Attachments" className={'tab-card'}>
                    <FileAttachments attachments={attachments}/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default View;