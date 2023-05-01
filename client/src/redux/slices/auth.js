import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
  fullName: null,
  email: null,
  token: null,
  passwordHash: null,
  isLoading: false,
  status: null,
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ fullName, passwordHash, email }) => {
    try {
      const { data } = await axios.post('/auth/register', {
        fullName,
        passwordHash,
        email,
      });
      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }
      // return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.user = action.payload.fullName;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
  },
});

export default authSlise.reducer;
