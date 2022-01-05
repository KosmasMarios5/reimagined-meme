import React, {useEffect} from "react";
import {Col, Row, Spinner} from "react-bootstrap";

import {useParams} from "react-router";
import useTicketAction from "../../hooks/useTicketAction";
import useTicketData from "../../hooks/useTicketData";
import View from "../../components/view/view";
import {DefaultLayout} from "../../../../layout/DefaultLayout";

export default () => {
    const {id} = useParams();
    const {getTicketDetails} = useTicketAction()
    const {byId: ticket, loading} = useTicketData({id})

    useEffect(() => {
        getTicketDetails(id)
    }, [id]);

    const closeTicket = () => {
        // () => dispatch(closeTicket(id))
    }

    return (
        <DefaultLayout>
            <Row>
                <Col>
                    {loading && <Spinner variant="primary" animation="border"/>}
                </Col>
            </Row>
            {ticket && (
                <View
                    ticket={ticket}
                    onClose={closeTicket}
                />
            )}
        </DefaultLayout>
    );
};
