import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const fetchFacts = createAsyncThunk('facts/fetchFacts', async () => {
  const { data } = await axios.get('/facts');
  return data;
});

const initialState = {
  facts: {
    items: [],
    status: 'loading',
  },
};

const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFacts.pending]: (state) => {
      state.facts.items = [];
      state.facts.status = 'loading';
    },
    [fetchFacts.fulfilled]: (state, action) => {
      state.facts.items = action.payload;
      state.facts.status = 'loaded';
    },
    [fetchFacts.rejected]: (state) => {
      state.facts.items = [];
      state.facts.status = 'error';
    },
  },
});

export const factsReducer = factsSlice.reducer;
