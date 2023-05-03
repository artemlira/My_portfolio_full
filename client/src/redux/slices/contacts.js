import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

const initialState = {
  contacts: {
    items: [],
    status: 'loading',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.contacts.items = [];
      state.contacts.status = 'loading';
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.status = 'loaded';
    },
    [fetchContacts.rejected]: (state) => {
      state.contacts.items = [];
      state.contacts.status = 'error';
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
