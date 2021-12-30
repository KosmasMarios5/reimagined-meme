export type Ticket = {
    id: string,
    subject: string,
    status: string,
    openAt: Date,
    conversations: Array<{
        sender: string,
        message: string,
        msgAt: Date,
    }>
}

export type UnmappedTicket = Ticket
