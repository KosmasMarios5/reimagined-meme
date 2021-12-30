import * as ActionTypes from '../actions/types'
import {mapMultiple} from 'ergolib-ts'
import {mapTicket} from "../types/map";
import _ from 'lodash'
import {fromJS} from "immutable";

const INITIAL_STATE = {
    loading: false,
    byId: {},
    indexTable: {
        loading: false,
        items: [],
        count: 0
    },
}

function getTickets(state) {
    return state
        .set('loading', true);
}

function getTicketsSucceeded(state, action) {
    const {payload: {count, result}} = action
    const mappedData = mapMultiple(result, mapTicket)
    const sortedKeys = _.orderBy(mappedData, 'date', 'desc').map(i => i.id);
    return state
        .set('byId', state.get('byId').merge(fromJS(mappedData)))
        .setIn(['indexTable', 'count'], parseInt(Number(count)))
        .setIn(['indexTable', 'items'], fromJS(sortedKeys))
        .setIn(['indexTable', 'loading'], false)
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