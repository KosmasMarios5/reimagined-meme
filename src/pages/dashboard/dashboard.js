import React from "react";
import {Button, Col, Nav, Row} from "react-bootstrap";
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {TicketTable} from "../../modules/ticket/components/Table/Table";
import {Link} from "react-router-dom";

export const Dashboard = () => {
    const pageTitle = 'Dashboard'
    return (
        <DefaultLayout>
            <h1 className="pb-2 mt-4 mb-2 border-bottom">
                {pageTitle}
            </h1>
            <Row>
                <Col>
                    <PageBreadcrumb page={pageTitle}/>
                </Col>
            </Row>
            <Link to="/add-ticket" style={{paddingLeft: 0}}>
                <Button
                    variant="primary"
                >
                    Add New Ticket
                </Button>
            </Link>
            <hr/>
            <Row>
                <Col className="recent-ticket">
                    <TicketTable/>
                </Col>
            </Row>
        </DefaultLayout>
    );
};
