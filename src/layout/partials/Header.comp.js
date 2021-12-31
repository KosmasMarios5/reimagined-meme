import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import useUserAction from "../../modules/currentUser/hooks/useUserAction";
import {getRouteUrl} from 'ergolib-ts'
import {ROUTE_PAGE_DASHBOARD} from "../../router/routes";

export const Header = () => {
    const {userLogout} = useUserAction()
    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to={getRouteUrl(ROUTE_PAGE_DASHBOARD)}>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tickets">
                        <Nav.Link>Tickets</Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={userLogout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
