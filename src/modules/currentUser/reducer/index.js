import * as ActionTypes from '../actions/types'
import {fromJS} from "immutable";
import {mapUser} from "../types/map";

const INITIAL_STATE = {
    loading: false,
    errorLogin: null,
    token: null,
    tokenExpirationDateTime: null,
    data: null,
    isLoggedIn: false,
    language: 'el',
}

function userLogin(state) {
    return state
        .set('errorLogin', null)
        .set('token', null)
        .set('loading', true)
        .set('isLoggedIn', false)
}

function userLoginSucceeded(state, action) {
    const {access_token, expires_in} = action.payload
    const tokenExpirationDateTime = new Date()
    tokenExpirationDateTime.setSeconds(tokenExpirationDateTime.getSeconds() + expires_in)
    return state
        .set('errorLogin', null)
        .set('loading', false)
        .set('token', access_token)
        .set('tokenExpirationDateTime', tokenExpirationDateTime)
        .set('isLoggedIn', true)
}

function userLoginFailed(state, action) {
    const {message} = action.payload
    return state
        .set('errorLogin', message)
        .set('token', null)
        .set('loading', false)
        .set('isLoggedIn', false)
}

function getUserDetails(state) {
    return state
        .set('loading', true)
}

function getUserDetailsSucceeded(state, action) {
    const {user} = action.payload;
    const mappedUser = mapUser(user[0])
    return state
        .set('loading', false)
        .set('language', mappedUser.locale)
        .set('data', fromJS(mappedUser));
}

function getUserDetailsFailed(state) {
    return state
        .set('loading', false);
}

export default {
    initialState: INITIAL_STATE,
    handlers: {
        [ActionTypes.USER_LOGIN]: userLogin,
        [ActionTypes.USER_LOGIN_SUCCEEDED]: userLoginSucceeded,
        [ActionTypes.USER_LOGIN_FAILED]: userLoginFailed,

        [ActionTypes.GET_USER_DETAILS]: getUserDetails,
        [ActionTypes.GET_USER_DETAILS_SUCCEEDED]: getUserDetailsSucceeded,
        [ActionTypes.GET_USER_DETAILS_FAILED]: getUserDetailsFailed,
    }
}