import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async (filters = {}) => {
    try {
      const response = await axios.get('api/catalog', { params: filters });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch catalog data.');
    }
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default catalogSlice.reducer;





// --------------origin---------------------------------------------
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchCatalog = createAsyncThunk(
//   'catalog/fetchCatalog',
//   async () => {
//     const response = await axios.get('api/catalog');
//     return response.data;
//   }
// );

// const catalogSlice = createSlice({
//   name: 'catalog',
//   initialState: { items: [], status: 'idle', error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCatalog.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCatalog.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = state.items.concat(action.payload);
//       })
//       .addCase(fetchCatalog.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default catalogSlice.reducer;