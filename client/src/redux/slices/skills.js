import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
  const { data } = await axios.get('/skills');
  return data;
});

const initialState = {
  skills: {
    items: [],
    status: 'loading',
  },
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSkills.pending]: (state) => {
      state.skills.items = [];
      state.skills.status = 'loading';
    },
    [fetchSkills.fulfilled]: (state, action) => {
      state.skills.items = action.payload;
      state.skills.status = 'loaded';
    },
    [fetchSkills.rejected]: (state) => {
      state.skills.items = [];
      state.skills.status = 'error';
    },
  },
});

export const skillsReducer = skillsSlice.reducer;
