import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const { data } = await axios.get('/projects');
  return data;
});

const initialState = {
  projects: {
    items: [],
    status: 'loading',
  },
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.projects.items = [];
      state.projects.status = 'loading';
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects.items = action.payload;
      state.projects.status = 'loaded';
    },
    [fetchProjects.rejected]: (state) => {
      state.projects.items = [];
      state.projects.status = 'error';
    },
  },
});

export const projectsReducer = projectsSlice.reducer;
