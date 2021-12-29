import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './locales/i18n'
import {Provider} from 'react-redux'
import store, {persistor} from './store/store'
import {PersistGate} from 'redux-persist/es/integration/react'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
