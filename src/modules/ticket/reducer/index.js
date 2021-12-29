import * as ActionTypes from '../actions/types'

const INITIAL_STATE = {
    loading: false,
}

function getTickets(state) {
    return state
        .set('loading', true);
}

function getTicketsSucceeded(state, action) {
    return state
        .set('loading', false);
}

function getTicketsFailed(state, action) {
    return state
        .set('loading', false);
}

function createTicket(state) {
    return state
        .set('loading', true);
}

function createTicketSucceeded(state, action) {
    return state
        .set('loading', false);
}

function createTicketFailed(state, action) {
    return state
        .set('loading', false);
}

function updateTicket(state) {
    return state
        .set('loading', true);
}

function updateTicketSucceeded(state, action) {
    return state
        .set('loading', false);
}

function updateTicketFailed(state, action) {
    return state
        .set('loading', false);
}

export default {
    initialState: INITIAL_STATE,
    handlers: {
        [ActionTypes.GET_TICKETS]: getTickets,
        [ActionTypes.GET_TICKETS_SUCCEEDED]: getTicketsSucceeded,
        [ActionTypes.GET_TICKETS_FAILED]: getTicketsFailed,

        [ActionTypes.CREATE_TICKET]: createTicket,
        [ActionTypes.CREATE_TICKET_SUCCEEDED]: createTicketSucceeded,
        [ActionTypes.CREATE_TICKET_FAILED]: createTicketFailed,

        [ActionTypes.UPDATE_TICKET]: updateTicket,
        [ActionTypes.UPDATE_TICKET_SUCCEEDED]: updateTicketSucceeded,
        [ActionTypes.UPDATE_TICKET_FAILED]: updateTicketFailed,
    }
}