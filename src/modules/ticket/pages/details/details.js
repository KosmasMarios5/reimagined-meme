import React, {useEffect} from "react";
import {Alert, Col, Row, Spinner} from "react-bootstrap";
import {PageBreadcrumb} from "../../../../components/breadcrumb/Breadcrumb.comp";

import {useParams} from "react-router";
import useTicketAction from "../../hooks/useTicketAction";
import useTicketData from "../../hooks/useTicketData";
import View from "../../components/view/view";
import {DefaultLayout} from "../../../../layout/DefaultLayout";

export default () => {
    const {id} = useParams();
    const {getTicketDetails} = useTicketAction()
    const {byId: ticket, loading} = useTicketData({id})
    const
        replyMsg = null,
        replyTicketError = null

    // const {
    //     isLoading,
    //     error,
    //     selectedTicket,
    //     replyMsg,
    //     replyTicketError,
    // } = useSelector(state => state.tickets);

    // useEffect(() => {
    // 	dispatch(fetchSingleTicket(tId));
    // 	return () => {
    // 		(replyMsg || replyTicketError) && dispatch(resetResponseMsg());
    // 	};
    // }, [tId, dispatch, replyMsg, replyTicketError]);

    useEffect(() => {
        getTicketDetails(id)
    }, [id]);

    const closeTicket = () => {
        // () => dispatch(closeTicket(id))
    }

    return (
        <DefaultLayout>
            {/*<h1 className="pb-2 mt-4 mb-2 border-bottom">*/}
            {/*    Ticket Details*/}
            {/*</h1>*/}
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    {loading && <Spinner variant="primary" animation="border"/>}
                    {/*{error && <Alert variant="danger">{error}</Alert>}*/}
                    {replyTicketError && (
                        <Alert variant="danger">{replyTicketError}</Alert>
                    )}
                    {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
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
