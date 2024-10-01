import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  tables: {
    status1: "empty",
    status2: "occupied",
    status3: "closed",
    status4: "empty",
    status5: "occupied",
    status6: "empty",
    status7: "closed",
    status8: "occupied",
    status9: "empty",
    status10: "empty",
  },
};

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    setTableOccupied: (state, action) => {
      state.tables[`status${action.payload.tableNumber}`] = 'occupied';
    },
    setTableEmpty: (state, action) => {
      state.tables[`status${action.payload.tableNumber}`] = 'empty';
    },
    setTableClosed: (state, action) => {
      state.tables[`status${action.payload.tableNumber}`] = 'closed';
    }
  },
  
});

export const { setTableOccupied, setTableEmpty, setTableClosed } = tablesSlice.actions;

export default tablesSlice.reducer;
