import React from "react";
import {useDispatch} from "react-redux";
// import { filterSerachTicket } from "../../pages/ticket-list/ticketsAction";
import {Form} from "react-bootstrap";

export const SearchForm = () => {
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const {value} = e.target;

        // dispatch(filterSerachTicket(value));
    };

    return (
        <Form>
            <Form.Group>
                <Form.Control
                    name="searchStr"
                    onChange={handleOnChange}
                    placeholder="Search ..."
                />
            </Form.Group>
        </Form>
    );
};
