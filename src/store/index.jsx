import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from './TableSlice';

const store = configureStore({
  reducer: {
    tables: tablesReducer,
  },
});

export default store;
