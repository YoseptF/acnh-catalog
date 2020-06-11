import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../slices/list/listSlice';

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
