import * as ActionTypes from '../actions/types'
import * as Actions from '../actions/actions'
import {requestCreator} from 'ergolib-ts'

const userLogin = requestCreator({
    url: '/user/login',
    method: 'POST',
    onSuccess: Actions.userLoginSucceeded,
    onFailure: Actions.userLoginFailed,
    headers: {'Content-Type': 'multipart/form-data'},
    overrideTask: async () => {
        return {
            data: {
                access_token: 'hello token'
            }
        }
    }
})

const getUserDetails = requestCreator({
    url: '/user',
    method: 'GET',
    onSuccess: Actions.getUserDetailsSucceeded,
    onFailure: Actions.getUserDetailsFailed,
    overrideTask: async () => {
        return {
            data: require('./mock/user.json')
        }
    }
})

export default {
    [ActionTypes.USER_LOGIN]: userLogin,
    [ActionTypes.GET_USER_DETAILS]: getUserDetails,
}
