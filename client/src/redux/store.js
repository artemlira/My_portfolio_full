import { configureStore } from '@reduxjs/toolkit';
import { authSlise } from './slices/auth';
import { skillsReducer } from './slices/skills';

const store = configureStore({
  reducer: {
    auth: authSlise,
    skills: skillsReducer,
  },
});

export default store;
