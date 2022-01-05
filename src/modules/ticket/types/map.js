import type {FAQ, Ticket, UnmappedTicket} from "./types";
import {UnmappedFAQ} from "./types";

export const mapTicket: Ticket = (datum: UnmappedTicket) => {
    if (!datum) return
    return {
        id: datum.id,
        subject: datum.subject,
        openAt: new Date(datum.openAt),
        status: datum.status,
        conversations: datum.conversations,
        timeline: datum.timeline,
        attachments: datum.attachments
    }
}

export const mapFAQ: FAQ = (datum: UnmappedFAQ) => {
    if (!datum) return
    return {
        id: datum.id,
        question: datum.question,
        answer: datum.answer,
        category: datum.category,
    }
}