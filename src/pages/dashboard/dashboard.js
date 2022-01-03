import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {TicketTable} from "../../modules/ticket/components/table/table";
import CreateModal from "../../modules/ticket/components/createModal/createModal";

export const Dashboard = () => {
    const pageTitle = 'Dashboard'
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <Button
                onClick={handleShow}
                variant="primary"
            >
                Add New Ticket
            </Button>
            <hr/>
            <Row>
                <Col className="recent-ticket">
                    <TicketTable/>
                </Col>
            </Row>
            <CreateModal
                show={show}
                onHide={handleClose}
            />
        </DefaultLayout>
    );
};
