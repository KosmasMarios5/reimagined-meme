import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./modules/ticket/pages/index/ticketsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newTicketReducer from "./modules/ticket/components/createModal/addTicketSlicer";
import registrationReducer from "./components/registration-form/userRegestrationSlice";
import passwordReducer from "./components/password-reset/passwordSlice";

const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		login: loginReducer,
		user: userReducer,
		openTicket: newTicketReducer,
		registration: registrationReducer,
		password: passwordReducer,
	},
});

export default store;
