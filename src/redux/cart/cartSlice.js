import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    
    async (customer = {}) => {
        try {
          const response = await axios.get('api/cart', { params: customer });
          return response.data;
        } catch (error) {
          throw new Error('Failed to fetch cart data.');
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCart.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchCart.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  export default cartSlice.reducer