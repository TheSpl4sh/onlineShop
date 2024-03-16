import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

const store = configureStore({
    reducer: {
        loginCustomer: authReducer,
    },
  });

export default store;