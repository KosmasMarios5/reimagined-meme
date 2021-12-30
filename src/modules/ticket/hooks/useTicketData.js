//@flow
import {createSelector} from 'reselect'
import {useSelector} from "react-redux";
import {parseMultipleFromReference} from 'ergolib-ts'
import {parseTicket} from "../types/parse";

const selectLoading = createSelector(
    (state) => state.ticket.get('loading'),
    (item) => item
)

const selectIndexTable = createSelector(
    [
        (state) => state.ticket.get('indexTable'),
        (state) => state.ticket.get('byId'),
        (state) => state.currentUser.get('language'),
    ],
    (indexTable, byId, language) => ({
        loading: indexTable.get('loading'),
        count: indexTable.get('count'),
        items: parseMultipleFromReference(indexTable.get('items'), byId, parseTicket),
    })
)

const useTicketData = () => {
    const loading = useSelector(selectLoading)
    const indexTable = useSelector(selectIndexTable)
    return {
        loading,
        indexTable,
    }
}

export default useTicketData