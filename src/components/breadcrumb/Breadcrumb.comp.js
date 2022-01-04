import React from "react";
import {Breadcrumb} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export const PageBreadcrumb = ({parent = 'Home', parentLink = "/", page}) => {
    return (
        <Breadcrumb>
            <LinkContainer to={parentLink}>
                <Breadcrumb.Item>{parent}</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    );
};
