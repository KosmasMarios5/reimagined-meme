import React from "react";
import {formatDate, getRouteUrl, Table} from 'ergolib-ts'
import useTicketAction from "../../hooks/useTicketAction";
import useTicketData from "../../hooks/useTicketData";
import {ROUTE_PAGE_TICKET_DETAILS} from "../../routes";
import {useHistory} from "react-router";

export const TicketTable = () => {
    const history = useHistory()
    const {getTickets: dataManager} = useTicketAction()
    const {indexTable} = useTicketData()
    return (
        <Table
            data={indexTable}
            pageSize={10}
            dataManager={dataManager}
            // noHeader
            onRowClick={({id}) => history.push(getRouteUrl(ROUTE_PAGE_TICKET_DETAILS, {id: id}))}
            showIndex
            columns={[
                {
                    Header: 'Subject',
                    accessor: 'id',
                    Cell: ({value, row}) => (
                        <div
                            style={{maxWidth: 360}}
                            className={'text-truncate'}
                            dangerouslySetInnerHTML={{__html: row.original.subject}}
                        />
                    )
                },
                {
                    Header: 'Status',
                    accessor: 'status',
                },
                {
                    Header: 'Opened At',
                    accessor: 'openAt',
                    Cell: ({value}) => (
                        <div>
                            <span>{formatDate(value, formatDate.formatTypes.TITLE_HALF)}</span>
                            <span> - </span>
                            <span>{formatDate(value, formatDate.formatTypes.TIME_ONLY_HOURS_MINUTES)}</span>
                        </div>
                    )
                },
            ]}
        />
    );
};
