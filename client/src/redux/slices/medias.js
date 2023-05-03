import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const fetchMedias = createAsyncThunk('medias/fetchMedias', async () => {
  const { data } = await axios.get('/medias');
  return data;
});

const initialState = {
  medias: {
    items: [],
    status: 'loading',
  },
};

const mediasSlice = createSlice({
  name: 'medias',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMedias.pending]: (state) => {
      state.medias.items = [];
      state.medias.status = 'loading';
    },
    [fetchMedias.fulfilled]: (state, action) => {
      state.medias.items = action.payload;
      state.medias.status = 'loaded';
    },
    [fetchMedias.rejected]: (state) => {
      state.medias.items = [];
      state.medias.status = 'error';
    },
  },
});

export const mediasReducer = mediasSlice.reducer;
