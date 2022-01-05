import React from "react";
import {Header} from "./partials/Header.comp";
import {Container} from "react-bootstrap";

export const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout bg-light">
            <Header/>
            <main className="main pe-1 ps-1">
                <Container fluid={true}>
                    {children}
                </Container>
            </main>
        </div>
    );
};
