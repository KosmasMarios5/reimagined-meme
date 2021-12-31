import {routeCreator} from "ergolib-ts";
import Details from "../pages/details/details";

export const ROUTE_PAGE_TICKET_DETAILS = routeCreator(Details, '/ticket/:id', 'Ticket Details', 'page.ticket.details')

export default {
    ROUTE_PAGE_TICKET_DETAILS,
}