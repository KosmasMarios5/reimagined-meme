import * as ActionTypes from '../actions/types'
import * as Actions from '../actions/actions'
import {requestCreator} from 'ergolib-ts'

const userLogin = requestCreator({
    url: '/login',
    method: 'POST',
    onSuccess: Actions.userLoginSucceeded,
    onFailure: Actions.userLoginFailed,
    headers: {'Content-Type': 'multipart/form-data'}
})

const getUserDetails = requestCreator({
    url: '/b2b/user/data',
    method: 'GET',
    onSuccess: Actions.getUserDetailsSucceeded,
    onFailure: Actions.getUserDetailsFailed,
})

export default {
    [ActionTypes.USER_LOGIN]: userLogin,
    [ActionTypes.GET_USER_DETAILS]: getUserDetails,
}
