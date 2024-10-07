import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from './TableSlice';
import menuOperationReducer from './MenuOperationsSlice';

const store = configureStore({
  reducer: {
    tables: tablesReducer,
    menu: menuOperationReducer,
  },
});

export default store;
