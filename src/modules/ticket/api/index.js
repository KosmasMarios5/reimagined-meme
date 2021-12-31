import * as ActionTypes from '../actions/types'
import * as Actions from '../actions/actions'
import {requestCreator} from 'ergolib-ts'

const getTickets = requestCreator({
    url: '/ticket',
    method: 'GET',
    onSuccess: Actions.getTicketsSucceeded,
    onFailure: Actions.getTicketsFailed,
    overrideTask: async () => {
        const data = require('./mock/tickets.json')
        return {
            data: {
                result: data,
                count: data.length
            }
        }
    }
})

const getTicketDetails = requestCreator({
    url: '/ticket/:id',
    hasPathParameters: ['id'],
    method: 'GET',
    onSuccess: Actions.getTicketDetailsSucceeded,
    onFailure: Actions.getTicketDetailsFailed,
    overrideTask: async ({id}) => {
        const data = require('./mock/tickets.json')
        return {
            data: data.find(d => d.id === id)
        }
    }
})

const createTicket = requestCreator({
    url: '/ticket',
    method: 'POST',
    onSuccess: Actions.createTicketSucceeded,
    onFailure: Actions.createTicketFailed,
})

const updateTicket = requestCreator({
    url: '/ticket/:id',
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
