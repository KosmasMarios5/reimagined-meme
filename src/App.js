import React from "react";
import "./App.css";
import {Module} from 'ergolib-ts'
import {CurrentUserModule} from "./modules/currentUser";
import {ConnectedRouter} from "connected-react-router";
import ContentRouter from "./router/contentRouter/contentRouter";
import history from './store/history'
import Login from "./modules/currentUser/pages/login/login";
import useUserData from "./modules/currentUser/hooks/useUserData";
import routes from './router/routes'
import {TicketModule} from "./modules/ticket";

Module.load(TicketModule)
Module.load(CurrentUserModule)
Module.addRoutes(routes)

export const ROUTES = Module.loadRoutes()
export const REQUEST_HANDLER = Module.getRequestHandlers()
export const REDUCERS = Module.loadReducers()

function App() {
    const {isLoggedIn} = useUserData()
    if (!(isLoggedIn)) return <Login/>
    return (
        <div className="App">
            <ConnectedRouter history={history}>
                <ContentRouter/>
            </ConnectedRouter>
            {/*<Router>*/}
            {/*    <Switch>*/}

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
