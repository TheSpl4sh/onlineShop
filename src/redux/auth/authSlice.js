import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginCustomer = createAsyncThunk(
    "authCustomer",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post("/api/customers/login", {
                loginOrEmail: email,
                password,
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const checkAuthenticationStatus = createAsyncThunk(
    "checkAuthenticationStatus",
    async (_, { dispatch }) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            dispatch(setAuthenticated(true));
        }
    }
);

export const getCustomerId = createAsyncThunk(
    "getId",
    async () => {
        const token = localStorage.getItem("authToken")
        try {
            const response = await axios.post("/api/customers/customer", {
                headers: {
                    Authorization: token
                }
            });
            return response.data;
        } catch (err) {
            throw new Error('Failed to fetch customers.');
        }
    }
);


const authSlice = createSlice({
    name: "loginCustomer",
    initialState: {
        customer: null,
        customerEmail: null,
        isAuthenticated: false,
        isAuthStatusChecked: false,
        status: "idle",
        error: { email: null, password: null },
    },
    reducers: {
        logoutCustomer: (state) => {
            state.customer = null;
            state.isAuthenticated = false;
            localStorage.removeItem("authToken");
            localStorage.removeItem("customerEmail");
        },
        clearErrors: (state) => {
            state.error = { email: null, password: null };
        },
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkAuthenticationStatus.fulfilled, (state) => {
                state.isAuthStatusChecked = true;
            })
            .addCase(loginCustomer.pending, (state) => {
                state.customer = "loading";
            })
            .addCase(loginCustomer.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customer = action.token;
                state.customerEmail = action.meta.arg.email
                state.isAuthenticated = true;
            })
            .addCase(loginCustomer.rejected, (state, action) => {
                state.status = "failed";
                state.error.email = action.payload.loginOrEmail || null;
                state.error.password = action.payload.password || null;
            });
    },
});

export const { logoutCustomer, clearErrors, setAuthenticated } =
    authSlice.actions;

export default authSlice.reducer;
