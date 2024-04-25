import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    
    async (/* customer = {} */) => {
        const token = localStorage.getItem("authToken")
        try {
          const response = await axios.get('/api/cart', {
            headers: {
                customerId: "6616c2b477dc7e9ac47b72a4",
                Authorization: token
            }
        });
          return response.data;
        } catch (error) {
          throw new Error('Failed to fetch cart data.');
        }
    }
)

export const handleAdd = createAsyncThunk(
  'cart/handleAdd',
  async (productId, { rejectWithValue }) => {
    const token = localStorage.getItem("authToken")
    try {
      const response = await axios.put(`/api/cart/${productId}`,{
        headers: {
            customerId: "6616c2b477dc7e9ac47b72a4",
            Authorization: token
        }
     });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], status: 'idle', error: null },
    reducers: {
      handleDelete: () => {
      },
    },
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
        })
        .addCase(handleAdd.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(handleAdd.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(handleAdd.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

export const { handleDelete} = cartSlice.actions
export default cartSlice.reducer