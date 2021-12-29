import {routeCreator} from "ergolib-ts";
import Login from "../pages/login/login";

export const ROUTE_PAGE_LOGIN = routeCreator(Login, '/login', 'login', 'page.login', {exact: true})

export default {
    ROUTE_PAGE_LOGIN,
}