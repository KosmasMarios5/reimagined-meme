import React from "react";
import PropTypes from "prop-types";
import {formatDate} from 'ergolib-ts'
import "./messageHistory.css";

export const MessageHistory = ({msg}) => {
    const userId = 1

    if (!msg) return null;
    return msg.map((row, i) => {
        const {sender, senderName} = row
        const type = userId === sender ? 'incoming' : 'outgoing'
        return (
            <div key={i} className={`message message--${type}`}>
                <div title={senderName} className="message__avatar shadow-sm">
                    <span>{senderName.toUpperCase().slice(0, 2)}</span>
                </div>
                <div className="message__body">
                    <p className={'shadow-sm'}>{row.message}</p>
                    <span className="time_date">
                        {formatDate(row.msgAt, formatDate.formatTypes.TIME_ONLY_HOURS_MINUTES)} | {formatDate(row.msgAt, formatDate.formatTypes.DATE_ONLY)}
                    </span>
                </div>
            </div>
        );
    });
};

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired,
};
