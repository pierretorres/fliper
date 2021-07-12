import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const preferences = createSlice({
  name: 'preferences',

  initialState: {
    theme: 'light',
    language: 'portuguese',
    currency: 'BRL',
    loadingEffect: true,
  },

  reducers: {
    changeTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    changeLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    changeCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
    changeLoadingEffect(state, action: PayloadAction<boolean>) {
      state.loadingEffect = action.payload;
    },
  },
});

export const {
  changeTheme,
  changeLanguage,
  changeCurrency,
  changeLoadingEffect,
} = preferences.actions;

export default preferences.reducer;
