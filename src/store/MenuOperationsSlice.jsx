import { createSlice } from '@reduxjs/toolkit';

export const menuOperationSlice = createSlice({
  name: 'menu',
  initialState: {
    operation: 'empty',
  },
  reducers: {
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
  },
});

export const { setOperation } = menuOperationSlice.actions;
export default menuOperationSlice.reducer;
