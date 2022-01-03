import {routeCreator} from "ergolib-ts";
import Details from "../pages/details/details";
import Index from "../pages/index/index";

export const ROUTE_PAGE_TICKET_INDEX = routeCreator(Index, '/tickets', 'Tickets List', 'page.ticket.index', {exact: true})
export const ROUTE_PAGE_TICKET_DETAILS = routeCreator(Details, '/ticket/:id', 'Ticket Details', 'page.ticket.details')

export default {
    ROUTE_PAGE_TICKET_INDEX,
    ROUTE_PAGE_TICKET_DETAILS,
}