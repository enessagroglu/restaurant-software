import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status1: 'empty',
  status2: 'empty',
  status3: 'empty',
  status4: 'empty',
  status5: 'empty',
  status6: 'empty',
  status7: 'empty',
  status8: 'empty',
  status9: 'empty',
  status10: 'empty',
};

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    setTableOccupied: (state, action) => {
      state[`status${action.payload.tableNumber}`] = 'occupied';
    },
    setTableEmpty: (state, action) => {
      state[`status${action.payload.tableNumber}`] = 'empty';
    },
    setTableClosed: (state, action) => {
      state[`status${action.payload.tableNumber}`] = 'closed';
    },
    setTableReopened: (state, action) => {
      state[`status${action.payload.tableNumber}`] = 'empty';
    },
  },
});

export const { setTableOccupied, setTableEmpty, setTableClosed, setTableReopened } = tablesSlice.actions;

export default tablesSlice.reducer;
