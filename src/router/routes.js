import {routeCreator} from "ergolib-ts";
import {Dashboard} from "../pages/dashboard/Dashboard.page";

export const ROUTE_PAGE_DASHBOARD = routeCreator(Dashboard, '/', 'dashboard', 'page.dashboard', {exact: true})

export default {
    ROUTE_PAGE_DASHBOARD,
}