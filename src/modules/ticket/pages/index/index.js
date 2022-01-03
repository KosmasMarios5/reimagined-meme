import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {PageBreadcrumb} from "../../../../components/breadcrumb/Breadcrumb.comp";
import {SearchForm} from "../../../../components/search-form/SearchForm.comp";
import {TicketTable} from "../../components/table/table";
import {DefaultLayout} from "../../../../layout/DefaultLayout";
import CreateModal from "../../components/createModal/createModal";

export default () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <DefaultLayout>
            <h1 className="pb-2 mt-4 mb-2 border-bottom">
                Tickets
            </h1>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket Lists"/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col sm={8}>
                    <Button onClick={handleShow}>Add New Ticket</Button>
                </Col>
                <Col className="text-right">
                    <SearchForm/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
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
