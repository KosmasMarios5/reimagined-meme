import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {PageBreadcrumb} from "../../../../components/breadcrumb/Breadcrumb.comp";
import {AddTicketForm} from "../../../../components/add-ticket-form/AddTicketForm.comp";
import {DefaultLayout} from "../../../../layout/DefaultLayout";

export default () => {
    return (
        <DefaultLayout>
            <Container>
                <Row>
                    <Col>
                        <PageBreadcrumb page="New Ticket"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddTicketForm/>
                    </Col>
                </Row>
            </Container>
        </DefaultLayout>
    );
};
