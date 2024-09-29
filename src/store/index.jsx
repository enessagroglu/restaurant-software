import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from './Tables';

const store = configureStore({
  reducer: {
    tables: tablesReducer,
  },
});

export default store;
