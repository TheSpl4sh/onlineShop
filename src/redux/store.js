import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import catalogReducer from "./catalog/catalogSlice";
import registerCustomer from "./registerCustomer/customersSlice";
import favoritesReducer from "./favorite/favoritesSlice";
import cartReducer from "./cart/cartSlice"

const store = configureStore({
    reducer: {
        loginCustomer: authReducer,
        customers: registerCustomer,
        catalog: catalogReducer,
        favorites: favoritesReducer
        cart: cartReducer
    },
});

export default store;
