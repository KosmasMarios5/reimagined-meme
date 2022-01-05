//@flow
import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import type {TicketTimeline} from "../../types/types";
import {formatDate} from "ergolib-ts";

type Props = {
    data: TicketTimeline
};

const Timeline = (props: Props) => {
    const {data} = props
    return (
        <div className={'bg-light'}>
            <VerticalTimeline className={'bg-light'}>
                {data.map(datum => (
                    <VerticalTimelineElement
                        textClassName={'bg-white shadow-sm'}
                        contentArrowStyle={{borderRight: '7px solid  var(--bg-white)'}}
                        date={formatDate(datum.date, formatDate.formatTypes.TITLE_HALF)}
                        iconClassName={'bg-light'}
                        // icon={<WorkIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">{datum.title}</h4>
                        <small className="vertical-timeline-element-subtitle">{datum.by}</small>
                        <p>
                            {datum.text}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;