import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerCustomer = createAsyncThunk(
    "customers/register",
    async (
        { email, firstName, lastName, telephone, password },
        { rejectWithValue }
    ) => {
        try {
            const response = await axios.post("/api/customers", {
                email,
                firstName,
                lastName,
                telephone,
                password,
            });
            return response.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }

            return rejectWithValue(err.response.data);
        }
    }
);

const customersSlice = createSlice({
    name: "customers",
    initialState: { entities: [], loading: "idle", error: { message: null } },
    reducers: {
        clearErrors: (state) => {
            state.error = { message: null };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerCustomer.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(registerCustomer.fulfilled, (state, action) => {
                state.loading = "idle";
                state.entities.push(action.payload);
            })
            .addCase(registerCustomer.rejected, (state, action) => {
                state.loading = "idle";
                if (action.payload) {
                    state.error.message = action.payload.message || null;
                } else {
                    state.error = action.error;
                }
            });
    },
});

export const { clearErrors } = customersSlice.actions;

export default customersSlice.reducer;
