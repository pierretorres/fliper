import { configureStore } from '@reduxjs/toolkit';
import preferecesReducer from './Preferences.store';

const store = configureStore({
  reducer: {
    preferences: preferecesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
