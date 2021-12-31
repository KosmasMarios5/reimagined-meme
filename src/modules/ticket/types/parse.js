import type {Ticket} from "./types";
import {parseMultiple} from 'ergolib-ts'

const parseConversion = (datum) => {
    if (!datum) return;
    return {
        sender: datum.get('sender'),
        senderName: datum.get('senderName'),
        message: datum.get('message'),
        msgAt: datum.get('msgAt'),
    }
}

export const parseTicket: Ticket = (datum) => {
    if (!datum) return;
    return {
        id: datum.get('id'),
        subject: datum.get('subject'),
        openAt: datum.get('openAt'),
        status: datum.get('status'),
        conversations: parseMultiple(datum.get('conversations'), parseConversion),
    }
}