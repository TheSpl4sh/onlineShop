import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk(
    'products/loadAll',

    async () => {
        const res = await fetch('http://localhost:4000/api/catalog');
        
        if(!res.ok) {
          throw new Error(`Can't fetch`)
        }
        
        const data = await res.json();
        return data
      }
)

const catalogSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
      },
      extraReducers: (builder) => {
        builder
          .addCase(loadProducts.fulfilled, (state,action) => {
            state.products = action.payload 
          })
        }
})

export default catalogSlice.reducer;