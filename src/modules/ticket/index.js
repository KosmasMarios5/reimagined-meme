import api from "./api";
import * as Actions from "./actions/actions";
import * as ActionTypes from "./actions/types";
import reducer from "./reducer";
import routes from "./routes";

export const TicketModule = {
    name: "ticket",
    actions: Actions,
    types: ActionTypes,
    reducer: reducer,
    routes: routes,
    api: api,
}