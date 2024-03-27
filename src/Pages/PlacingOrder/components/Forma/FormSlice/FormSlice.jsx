// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    firstName: "",
    lastName: "",
    company: "",
    region: "",
    city: "",
    street: "",
    postalCode: "",
    houseNumber: "",
    email: "",
    password: "",
    phoneNumber: "",
  },
  reducers: {
    updateFormData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;