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

const parseTimeline = (datum) => {
    if (!datum) return;
    return {
        title: datum.get('title'),
        text: datum.get('text'),
        date: datum.get('date'),
        by: datum.get('by'),
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
        timeline: parseMultiple(datum.get('timeline'), parseTimeline),
    }
}