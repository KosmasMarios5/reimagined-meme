import React from "react";
import {Header} from "./partials/Header.comp";
import {Footer} from "./partials/Footer.comp";
import {Container} from "react-bootstrap";

export const DefaultLayout = ({children}) => {
    return (
        <div className="default-layout">
            <header className="header mb-2">
                <Header/>
            </header>
            <main className="main">
                <Container fluid={true}>
                    {children}
                </Container>
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );
};
