import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import catalogReducer from "./catalog/catalogSlice";
import registerCustomer from "./registerCustomer/customersSlice";

const store = configureStore({
    reducer: {
        loginCustomer: authReducer,
        customers: registerCustomer,
        catalog: catalogReducer
    },
});

export default store;
