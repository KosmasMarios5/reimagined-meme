import React, {useEffect} from "react";
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
import useUserAction from "./modules/currentUser/hooks/useUserAction";

Module.load(TicketModule)
Module.load(CurrentUserModule)
Module.addRoutes(routes)

export const ROUTES = Module.loadRoutes()
export const REQUEST_HANDLER = Module.getRequestHandlers()
export const REDUCERS = Module.loadReducers()

function App() {
    const {isLoggedIn} = useUserData()
    const {getUserDetails} = useUserAction()

    useEffect(() => {
        if (isLoggedIn) {
            getUserDetails()
        }
    }, [isLoggedIn])

    if (!(isLoggedIn)) return <Login/>
    return (
        <div className="App">
            <ConnectedRouter history={history}>
                <ContentRouter/>
            </ConnectedRouter>
            {/*<Router>*/}
            {/*    <Switch>*/}
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
