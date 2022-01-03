import React from "react";

import {Button, Col, Row} from "react-bootstrap";
import {PageBreadcrumb} from "../../../../components/breadcrumb/Breadcrumb.comp";
import {SearchForm} from "../../../../components/search-form/SearchForm.comp";
import {TicketTable} from "../../components/table/table";
import {DefaultLayout} from "../../../../layout/DefaultLayout";
import {AddTicketForm} from "../../components/createModal/createModal";

export default () => {
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
                    {/*<Link to={getRouteUrl(ROUTE_PAGE_TICKET_CREATE)}>*/}
                    <Button>Add New Ticket</Button>
                    {/*</Link>*/}
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
            <AddTicketForm
            />
        </DefaultLayout>
    );
};
