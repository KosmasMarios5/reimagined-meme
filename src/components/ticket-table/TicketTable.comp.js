import React from "react";
// import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";
import {formatDate, Table} from 'ergolib-ts'
import useTicketAction from "../../modules/ticket/hooks/useTicketAction";

export const TicketTable = () => {
    // const { searchTicketList, isLoading, error } = useSelector(
    //   (state) => state.tickets
    // );
    const {getTickets: dataManager} = useTicketAction()
    const searchTicketList = [], isLoading = false, error = null;
    if (isLoading) return <h3>Loading ...</h3>;
    if (error) return <h3>{error}</h3>;

    return (
        <Table
            data={{
                loading: false,
                count: 0,
                data: []
            }}
            pageSize={10}
            dataManager={dataManager}
            noHeader
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
                            <span>({formatDate(value, formatDate.formatTypes.TIME_ONLY)})</span>
                        </div>
                    )
                },
            ]}
        />
    );
};
