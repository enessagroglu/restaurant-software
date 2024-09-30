import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// JSON dosyasını okuma işlemi (async)
export const loadTablesFromJson = createAsyncThunk('tables/loadFromJson', async () => {
  const response = await axios.get('/tables'); // Proxy ayarıyla localhost:5000'e yönlenecek
  return response.data;
});

// JSON dosyasına kaydetme işlemi (async)
export const saveTablesToJson = createAsyncThunk('tables/saveToJson', async (tablesState) => {
  await axios.post('/update-tables', tablesState); // Proxy ayarıyla localhost:5000'e yönlenecek
});

const tablesSlice = createSlice({
  name: 'tables',
  initialState: {
    tables: {},
    loading: false,
    error: null,
  },
  reducers: {
    setTableOccupied: (state, action) => {
      state.tables[`status${action.payload.tableNumber}`] = 'occupied';
    },
    setTableEmpty: (state, action) => {
      state.tables[`status${action.payload.tableNumber}`] = 'empty';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTablesFromJson.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTablesFromJson.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = action.payload;
      })
      .addCase(loadTablesFromJson.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveTablesToJson.fulfilled, (state) => {
        // JSON'a kaydetme işlemi başarılı olduğunda yapılacak ek işlem varsa buraya ekle
      });
  },
});

export const { setTableOccupied, setTableEmpty } = tablesSlice.actions;

export default tablesSlice.reducer;
