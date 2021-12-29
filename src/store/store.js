import {persistReducer, persistStore} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import {createLogger} from 'redux-logger';
import Immutable from 'immutable';
import {mainStore} from 'ergolib-ts'
import history from './history'
import {API} from "../helpers/constants";
import {userLogout} from "../modules/currentUser/actions/actions";
import {connectRouter, routerMiddleware} from 'connected-react-router'
import storage from 'redux-persist/es/storage'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {REDUCERS, REQUEST_HANDLER} from "../App";

const middleware = [];

if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        stateTransformer: (state) => {
            let newState = {};
            for (let i of Object.keys(state)) {
                if (Immutable.Iterable.isIterable(state[i])) {
                    newState[i] = state[i].toJS();
                } else {
                    newState[i] = state[i];
                }
            }
            return newState;
        }
    })
    middleware.push(logger);
}


const store = mainStore({
    config: {
        key: 'rootOrionTicketingPortal',
        whitelist: ['currentUser'],
        immutableTransform: immutableTransform,
        persistReducer: persistReducer,
        routerMiddleware: routerMiddleware,
        storage: storage,
        redux: {
            applyMiddleware: applyMiddleware,
            compose: compose,
            createStore: createStore
        }
    },
    middleware: middleware,
    reducerConfigurations: {
        importedReducers: REDUCERS,
        options: {
            persistOnLogout: [],
            history: history,
            connectRouter: connectRouter,
            combineReducers: combineReducers
        }
    },
    requestHandlerConfigurations: {
        requestHandler: REQUEST_HANDLER,
        requestHandlerOptions: {
            useTokenCredentials: true,
            baseUrl: (state) => {
                const LANG = state.currentUser.get('language');
                return API + '/' + LANG
            },
            handleUnauthenticatedResponse: (dispatch, response) => {
                dispatch(userLogout())
            }
        }
    }
})

// noinspection JSCheckFunctionSignatures
export const persistor = persistStore(store);

export default store;