import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import useUserAction from "../../modules/currentUser/hooks/useUserAction";
import {getRouteUrl} from 'ergolib-ts'
import {ROUTE_PAGE_DASHBOARD} from "../../router/routes";
import {ROUTE_PAGE_FAQS, ROUTE_PAGE_TICKET_INDEX} from "../../modules/ticket/routes";

export const Header = () => {
    const {userLogout} = useUserAction()
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" className={'p-3'}>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto flex-fill">
                    <LinkContainer to={getRouteUrl(ROUTE_PAGE_DASHBOARD)}>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={getRouteUrl(ROUTE_PAGE_TICKET_INDEX)}>
                        <Nav.Link>Tickets</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={getRouteUrl(ROUTE_PAGE_FAQS)}>
                        <Nav.Link>FAQs</Nav.Link>
                    </LinkContainer>
                    <div className={'me-auto'}/>
                    <div>
                        <Nav.Item>
                            <Button onClick={userLogout} variant={"warning"}>
                                Logout
                            </Button>
                        </Nav.Item>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
