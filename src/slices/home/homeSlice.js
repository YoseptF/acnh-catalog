import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    categories: [
      {
        name: 'Fish',
        image: `http://acnhapi.com/v1/icons/fish/${Math.floor(Math.random() * 80)}`,
      },
      {
        name: 'Bugs',
        image: `http://acnhapi.com/v1/icons/bugs/${Math.floor(Math.random() * 80)}`,
      },
      {
        name: 'Fossils',
        image: 'http://acnhapi.com/v1/images/fossils/amber',
      },
      {
        name: 'Villagers',
        image: `http://acnhapi.com/v1/images/villagers/${Math.floor(Math.random() * 391)}`,
      },
      {
        name: 'Songs',
        image: `http://acnhapi.com/v1/images/songs/${Math.floor(Math.random() * 95)}`,
      },
      {
        name: 'Furniture',
        image: 'http://acnhapi.com/v1/images/furniture/FtrCorkboard_Remake_2_2',
      },
    ],
  },
  reducers: {

  },
});

export const selectCategories = state => state.home.categories;

export default homeSlice.reducer;
