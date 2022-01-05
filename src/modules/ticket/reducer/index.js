import * as ActionTypes from '../actions/types'
import {mapMultiple} from 'ergolib-ts'
import {mapFAQ, mapTicket} from "../types/map";
import _ from 'lodash'
import {fromJS} from "immutable";

const INITIAL_STATE = {
    create: {
        loading: false,
        error: null,
        newItemId: null
    },
    loading: false,
    byId: {},
    FAQbyId: {},
    allFAQs: [],
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
        .setIn(['create', 'loading'], true)
        .setIn(['create', 'error'], null)
}

function createTicketSucceeded(state, action) {
    const {payload} = action
    const mappedData = mapTicket(payload)
    return state
        .setIn(['byId', mappedData.id], fromJS(mappedData))
        .setIn(['create', 'newItemId'], mappedData.id)
        .setIn(['create', 'loading'], false)
        .setIn(['create', 'error'], null)
}

function createTicketFailed(state, action) {
    const {error} = action.payload
    return state
        .setIn(['create', 'loading'], false)
        .setIn(['create', 'error'], error)
}

function clearCreateTicketData(state) {
    return state
        .setIn(['create', 'newItemId'], null)
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

function getTicketDetails(state) {
    return state
        .set('loading', true)
}

function getTicketDetailsSucceeded(state, action) {
    const {payload} = action;
    const mappedData = mapTicket(payload)
    return state
        .set('loading', false)
        .setIn(['byId', mappedData.id], fromJS(mappedData))
}

function getTicketDetailsFailed(state, action) {
    return state
        .set('loading', false)
}


function replyToTicket(state) {
    return state
        .set('loading', true);
}

function replyToTicketSucceeded(state, action) {
    const {payload} = action;
    const mappedData = mapTicket(payload)
    return state
        .set('loading', false)
        .setIn(['byId', mappedData.id], fromJS(mappedData))
}

function replyToTicketFailed(state, action) {
    return state
        .set('loading', false);
}


function getFaqs(state) {
    return state
        .set('loading', true)
}

function getFaqsSucceeded(state, action) {
    const {payload} = action
    const mappedData = mapMultiple(payload, mapFAQ)
    // const sortedKeys = _.orderBy(mappedData, 'date', 'desc').map(i => i.id);
    const sortedKeys = Object.keys(mappedData);
    return state
        .set('FAQbyId', state.get('FAQbyId').merge(fromJS(mappedData)))
        .set('allFAQs', fromJS(sortedKeys))
        .set('loading', false)
}

function getFaqsFailed(state, action) {
    return state
        .set('loading', false)
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
        [ActionTypes.CLEAR_CREATE_TICKET_DATA]: clearCreateTicketData,

        [ActionTypes.UPDATE_TICKET]: updateTicket,
        [ActionTypes.UPDATE_TICKET_SUCCEEDED]: updateTicketSucceeded,
        [ActionTypes.UPDATE_TICKET_FAILED]: updateTicketFailed,

        [ActionTypes.GET_TICKET_DETAILS]: getTicketDetails,
        [ActionTypes.GET_TICKET_DETAILS_SUCCEEDED]: getTicketDetailsSucceeded,
        [ActionTypes.GET_TICKET_DETAILS_FAILED]: getTicketDetailsFailed,

        [ActionTypes.REPLY_TO_TICKET]: replyToTicket,
        [ActionTypes.REPLY_TO_TICKET_SUCCEEDED]: replyToTicketSucceeded,
        [ActionTypes.REPLY_TO_TICKET_FAILED]: replyToTicketFailed,

        [ActionTypes.GET_FAQS]: getFaqs,
        [ActionTypes.GET_FAQS_SUCCEEDED]: getFaqsSucceeded,
        [ActionTypes.GET_FAQS_FAILED]: getFaqsFailed,

    }
}