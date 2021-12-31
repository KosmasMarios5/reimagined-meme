import {routeCreator} from "ergolib-ts";
import Details from "../pages/details/details";
import Create from "../pages/create/create";

export const ROUTE_PAGE_TICKET_CREATE = routeCreator(Create, '/ticket/add', 'Add Ticket', 'page.ticket.add', {exact: true})
export const ROUTE_PAGE_TICKET_DETAILS = routeCreator(Details, '/ticket/:id', 'Ticket Details', 'page.ticket.details')

export default {
    ROUTE_PAGE_TICKET_CREATE,
    ROUTE_PAGE_TICKET_DETAILS,
}