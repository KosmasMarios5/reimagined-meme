import React from "react";
import "./App.css";
import {Module} from 'ergolib-ts'
import {CurrentUserModule} from "./modules/currentUser";
import {ConnectedRouter} from "connected-react-router";
import ContentRouter from "./router/contentRouter";
import history from './store/history'

Module.load(CurrentUserModule)

export const ROUTES = Module.loadRoutes()
export const REQUEST_HANDLER = Module.getRequestHandlers()
export const REDUCERS = Module.loadReducers()

function App() {
    return (
        <div className="App">
            <ConnectedRouter history={history}>
                <ContentRouter/>
            </ConnectedRouter>
            {/*<Router>*/}
            {/*    <Switch>*/}
            {/*        <Route exact path="/">*/}
            {/*            <Entry/>*/}
            {/*        </Route>*/}
            {/*        <Route exact path="/registration">*/}
            {/*            <Registration/>*/}
            {/*        </Route>*/}
            {/*        <Route exact path="/password-reset">*/}
            {/*            <PasswordOtpForm/>*/}
            {/*        </Route>*/}
            {/*        <Route exact path="/verification/:_id/:email">*/}
            {/*            <UserVerification/>*/}
            {/*        </Route>*/}
            {/*        <PrivateRoute exact path="/dashboard">*/}
            {/*            <Dashboard/>*/}
            {/*        </PrivateRoute>*/}
            {/*        <PrivateRoute exact path="/add-ticket">*/}
            {/*            <AddTicket/>*/}
            {/*        </PrivateRoute>*/}
            {/*        <PrivateRoute exact path="/ticket/:tId">*/}
            {/*            <Ticket/>*/}
            {/*        </PrivateRoute>*/}
            {/*        <PrivateRoute exact path="/tickets">*/}
            {/*            <TicketLists/>*/}
            {/*        </PrivateRoute>*/}
            {/*        <Route path="*">*/}
            {/*            <h1>404 Page not found</h1>*/}
            {/*        </Route>*/}
            {/*    </Switch>*/}
            {/*</Router>*/}
        </div>
    );
}

export default App;
