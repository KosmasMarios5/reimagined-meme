// @flow
import {useDispatch} from 'react-redux'
import * as actions from '../actions/actions'
import {useCallback} from "react";

const useTicketAction = () => {
    const dispatch = useDispatch()

    const getTickets = useCallback((pageIndex, pageSize) => {
        dispatch(actions.getTickets({
                requiresCounts: true,
                skip: pageIndex * pageSize,
                take: pageSize,
                isTemplate: 1
            })
        )
    }, [dispatch])

    const getTicketDetails = useCallback((id) => {
        dispatch(actions.getTicketDetails({
                id
            })
        )
    }, [dispatch])

    return {
        getTickets,
        getTicketDetails
    }
}

export default useTicketAction