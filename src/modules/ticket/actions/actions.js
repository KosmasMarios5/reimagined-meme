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
export const clearCreateTicketData = actionCreator(ActionTypes.CLEAR_CREATE_TICKET_DATA);

export const updateTicket = actionCreator(ActionTypes.UPDATE_TICKET);
export const updateTicketSucceeded = actionCreator(ActionTypes.UPDATE_TICKET_SUCCEEDED);
export const updateTicketFailed = actionCreator(ActionTypes.UPDATE_TICKET_FAILED);

export const replyToTicket = actionCreator(ActionTypes.REPLY_TO_TICKET);
export const replyToTicketSucceeded = actionCreator(ActionTypes.REPLY_TO_TICKET_SUCCEEDED);
export const replyToTicketFailed = actionCreator(ActionTypes.REPLY_TO_TICKET_FAILED);

export const getFaqs = actionCreator(ActionTypes.GET_FAQS);
export const getFaqsSucceeded = actionCreator(ActionTypes.GET_FAQS_SUCCEEDED);
export const getFaqsFailed = actionCreator(ActionTypes.GET_FAQS_FAILED);
