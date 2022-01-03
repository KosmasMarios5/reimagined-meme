import React from "react";
import {Link} from "react-router-dom";
import {formatDate, Table} from 'ergolib-ts'
import useTicketAction from "../../hooks/useTicketAction";
import useTicketData from "../../hooks/useTicketData";

export const TicketTable = () => {
    const {getTickets: dataManager} = useTicketAction()
    const {indexTable} = useTicketData()
    return (
        <Table
            data={indexTable}
            pageSize={10}
            dataManager={dataManager}
            // noHeader
            showIndex
            columns={[
                {
                    accessor: 'id',
                    Cell: ({value, row}) => (
                        <Link to={`/ticket/${value}`}>{row.original.subject}</Link>
                    )
                },
                {
                    accessor: 'status',
                },
                {
                    accessor: 'openAt',
                    Cell: ({value}) => (
                        <div>
                            <strong>{formatDate(value, formatDate.formatTypes.TITLE_HALF)} </strong>
                            <span>({formatDate(value, formatDate.formatTypes.TIME_ONLY_HOURS_MINUTES)})</span>
                        </div>
                    )
                },
            ]}
        />
    );
};
