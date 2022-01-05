export type TicketTimeline = Array<{
    title: string,
    text: string,
    date: Date,
    by: string,
}>

export type Ticket = {
    id: string,
    subject: string,
    status: string,
    openAt: Date,
    conversations: Array<{
        sender: string,
        message: string,
        msgAt: Date,
    }>,
    timeline: TicketTimeline
}

export type UnmappedTicket = Ticket
