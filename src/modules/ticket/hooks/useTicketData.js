//@flow
import {createSelector} from 'reselect'
import {useSelector} from "react-redux";
import {parseMultipleFromReference} from 'ergolib-ts'
import {parseTicket} from "../types/parse";

const selectLoading = createSelector(
    (state) => state.ticket,
    (item) => item.get('loading')
)

const selectCreate = createSelector(
    (state) => state.ticket.get('create'),
    (item) => ({
        loading: item.get('loading'),
        error: item.get('error'),
        newItemId: item.get('newItemId'),
    })
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

const selectById = createSelector(
    [
        (state) => state.ticket.get('byId'),
        (state) => state.currentUser.get('language'),
        (state, id) => id
    ],
    (byId, language, id) => {
        return parseTicket(byId.get(id), language);
    }
)

type Props = {
    id?: string
}

const useTicketData = ({id}: Props = {}) => {
    const loading = useSelector(selectLoading)
    const create = useSelector(selectCreate)
    const indexTable = useSelector(selectIndexTable)
    const byId = useSelector(state => selectById(state, id))
    return {
        loading,
        create,
        indexTable,
        byId
    }
}

export default useTicketData