import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const fetchSmallProjects = createAsyncThunk('smallProjects/fetchSmallProjects', async () => {
  const { data } = await axios.get('/projects/small');
  return data;
});

const initialState = {
  smallProjects: {
    items: [],
    status: 'loading',
  },
};

const smallProjectsSlice = createSlice({
  name: 'smallProjects',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSmallProjects.pending]: (state) => {
      state.smallProjects.items = [];
      state.smallProjects.status = 'loading';
    },
    [fetchSmallProjects.fulfilled]: (state, action) => {
      state.smallProjects.items = action.payload;
      state.smallProjects.status = 'loaded';
    },
    [fetchSmallProjects.rejected]: (state) => {
      state.smallProjects.items = [];
      state.smallProjects.status = 'error';
    },
  },
});

export const smallProjectsReducer = smallProjectsSlice.reducer;
