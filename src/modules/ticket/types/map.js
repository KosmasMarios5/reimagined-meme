import type {Ticket, UnmappedTicket} from "./types";

export const mapTicket: Ticket = (datum: UnmappedTicket) => {
    if (!datum) return
    return {
        id: datum.id,
        subject: datum.subject,
        openAt: new Date(datum.openAt),
        status: datum.status,
        conversations: datum.conversations
    }
}