import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginCustomer = createAsyncThunk(
    "authCustomer",
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "/api/customers/login",
                loginData
            );
            return response.data;
        } catch (err) {
            console.log(err.response.data);
            return rejectWithValue(err.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "loginCustomer",
    initialState: {
        customer: null,
        status: "idle",
        error: { email: null, password: null },
    },
    reducers: {
        logoutCustomer: (state) => {
            state.customer = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginCustomer.pending, (state) => {
                state.customer = "loading";
            })
            .addCase(loginCustomer.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.customer = action.payload.user;
            })
            .addCase(loginCustomer.rejected, (state, action) => {
                state.status = "failed";
                state.error.email = action.error.message.loginOrEmail;
                state.error.password =
                    action.error.message.password ||
                    action.error.message.loginOrEmail;
            });
    },
});

export const { logoutCustomer } = authSlice.actions;

export default authSlice.reducer;
