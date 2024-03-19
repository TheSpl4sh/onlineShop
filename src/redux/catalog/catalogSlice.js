import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Створюємо асинхронну thunk дію
export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async () => {
    const response = await axios.get('api/catalog');
    return response.data;
  }
);

// Створюємо слайс
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
        // Додаємо продукти в стан
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default catalogSlice.reducer;