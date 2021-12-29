import * as ActionTypes from '../actions/types'
import * as Actions from '../actions/actions'
import {requestCreator} from 'ergolib-ts'

const getTickets = requestCreator({
    url: '/v1/ticket',
    method: 'POST',
    onSuccess: Actions.getTicketsSucceeded,
    onFailure: Actions.getTicketsFailed,
})

const getTicketDetails = requestCreator({
    url: '/v1/ticket/:id',
    hasPathParameters: ['id'],
    method: 'POST',
    onSuccess: Actions.getTicketDetailsSucceeded,
    onFailure: Actions.getTicketDetailsFailed,
})

const createTicket = requestCreator({
    url: '/v1/ticket',
    method: 'POST',
    onSuccess: Actions.createTicketSucceeded,
    onFailure: Actions.createTicketFailed,
})

const updateTicket = requestCreator({
    url: '/v1/ticket/:id',
    hasPathParameters: ['id'],
    method: 'PUT',
    onSuccess: Actions.updateTicketSucceeded,
    onFailure: Actions.updateTicketFailed,
})

export default {
    [ActionTypes.GET_TICKETS]: getTickets,
    [ActionTypes.GET_TICKET_DETAILS]: getTicketDetails,
    [ActionTypes.CREATE_TICKET]: createTicket,
    [ActionTypes.UPDATE_TICKET]: updateTicket,
}
