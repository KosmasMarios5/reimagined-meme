// @flow
import {useDispatch} from 'react-redux'
import * as actions from '../actions/actions'
import {useCallback} from "react";

const useUserAction = () => {
    const dispatch = useDispatch()

    const userLogin = useCallback((values) => {
        const bodyFormData = new FormData();
        bodyFormData.append('username', values.username);
        bodyFormData.append('password', values.password);
        dispatch(actions.userLogin(bodyFormData))
    }, [dispatch])

    const userLogout = useCallback(() => {
        dispatch(actions.userLogout())
    }, [dispatch])

    const getUserDetails = useCallback(() => {
        dispatch(actions.getUserDetails({}))
    }, [dispatch])

    return {
        userLogin,
        userLogout,
        getUserDetails,
    }
}

export default useUserAction