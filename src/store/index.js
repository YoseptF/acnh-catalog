import { configureStore } from '@reduxjs/toolkit';
import currentReducer from '../slices/current/currentSlice';
import homeSlice from '../slices/home/homeSlice';

const store = configureStore({
  reducer: {
    current: currentReducer,
    home: homeSlice,
  },
});

export default store;
