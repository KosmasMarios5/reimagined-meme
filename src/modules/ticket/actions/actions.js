import {actionCreator} from 'ergolib-ts'
import * as ActionTypes from './types'

export const getTickets = actionCreator(ActionTypes.GET_TICKETS);
export const getTicketsSucceeded = actionCreator(ActionTypes.GET_TICKETS_SUCCEEDED);
export const getTicketsFailed = actionCreator(ActionTypes.GET_TICKETS_FAILED);

export const getTicketDetails = actionCreator(ActionTypes.GET_TICKET_DETAILS);
export const getTicketDetailsSucceeded = actionCreator(ActionTypes.GET_TICKET_DETAILS_SUCCEEDED);
export const getTicketDetailsFailed = actionCreator(ActionTypes.GET_TICKET_DETAILS_FAILED);

export const createTicket = actionCreator(ActionTypes.CREATE_TICKET);
export const createTicketSucceeded = actionCreator(ActionTypes.CREATE_TICKET_SUCCEEDED);
export const createTicketFailed = actionCreator(ActionTypes.CREATE_TICKET_FAILED);

export const updateTicket = actionCreator(ActionTypes.UPDATE_TICKET);
export const updateTicketSucceeded = actionCreator(ActionTypes.UPDATE_TICKET_SUCCEEDED);
export const updateTicketFailed = actionCreator(ActionTypes.UPDATE_TICKET_FAILED);

