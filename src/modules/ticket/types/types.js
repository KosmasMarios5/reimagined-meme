export type FAQ = {
    id: string,
    question: string,
    answer: string,
    category: string
}

export type Attachment = {
    id: string,
    fileName: string,
    url: string,
    uploadDate: string
}

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
    timeline: TicketTimeline,
    attachments: Array<Attachment>
}

export type UnmappedTicket = Ticket
export type UnmappedFAQ = FAQ
