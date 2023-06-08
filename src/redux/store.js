import {configureStore} from '@reduxjs/toolkit';
import nav from './slice/navSlice';

export const store = configureStore({
  reducer: {
    nav,
  },
});
