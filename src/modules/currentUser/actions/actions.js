import {actionCreator} from 'ergolib-ts'
import * as ActionTypes from './types'

export const userLogin = actionCreator(ActionTypes.USER_LOGIN);
export const userLoginSucceeded = actionCreator(ActionTypes.USER_LOGIN_SUCCEEDED);
export const userLoginFailed = actionCreator(ActionTypes.USER_LOGIN_FAILED);

export const userLogout = actionCreator(ActionTypes.USER_LOGOUT);
export const userLogoutSucceeded = actionCreator(ActionTypes.USER_LOGOUT_SUCCEEDED);
export const userLogoutFailed = actionCreator(ActionTypes.USER_LOGOUT_FAILED);

export const getUserDetails = actionCreator(ActionTypes.GET_USER_DETAILS);
export const getUserDetailsSucceeded = actionCreator(ActionTypes.GET_USER_DETAILS_SUCCEEDED);
export const getUserDetailsFailed = actionCreator(ActionTypes.GET_USER_DETAILS_FAILED);