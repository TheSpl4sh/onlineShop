import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import catalogReducer from './catalog/catalogSlice';

const store = configureStore({
    reducer: {
        loginCustomer: authReducer,
        catalog: catalogReducer
    },
  });

export default store;