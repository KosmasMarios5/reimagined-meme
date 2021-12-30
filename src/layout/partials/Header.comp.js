import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import {LinkContainer} from "react-router-bootstrap";
import useUserAction from "../../modules/currentUser/hooks/useUserAction";

export const Header = () => {
    const {userLogout} = useUserAction()
    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/dashboard">
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
