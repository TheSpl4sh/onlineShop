import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import catalogReducer from './catalog/catalogSlice';

const store = configureStore({
    reducer: {
        loginCustomer: authReducer,
        products: catalogReducer
    },
  });

export default store;