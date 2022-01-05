import type {FAQ, Ticket} from "./types";
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

const parseAttachment = (datum) => {
    if (!datum) return;
    return {
        id: datum.get('id'),
        fileName: datum.get('fileName'),
        url: datum.get('url'),
        uploadDate: datum.get('uploadDate'),
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
        attachments: parseMultiple(datum.get('attachments'), parseAttachment),
    }
}

export const parseFAQ: FAQ = (datum) => {
    if (!datum) return;
    return {
        id: datum.get('id'),
        question: datum.get('question'),
        answer: datum.get('answer'),
        category: datum.get('category'),
    }
}