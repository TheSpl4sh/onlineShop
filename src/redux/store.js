import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import catalogReducer from "./catalog/catalogSlice";
import registerCustomer from "./registerCustomer/customersSlice";
import cartReducer from "./cart/cartSlice"

const store = configureStore({
    reducer: {
        loginCustomer: authReducer,
        customers: registerCustomer,
        catalog: catalogReducer,
        cart: cartReducer
    },
});

export default store;
