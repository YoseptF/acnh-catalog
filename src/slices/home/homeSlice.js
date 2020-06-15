import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    categories: [
      {
        name: 'Fish',
        image: `http://acnhapi.com/v1/icons/fish/${(Math.floor(Math.random() * 79) + 1)}`,
      },
      {
        name: 'Bugs',
        image: `http://acnhapi.com/v1/icons/bugs/${(Math.floor(Math.random() * 79) + 1)}`,
      },
      {
        name: 'Fossils',
        image: 'http://acnhapi.com/v1/images/fossils/amber',
      },
      {
        name: 'Villagers',
        image: `http://acnhapi.com/v1/images/villagers/${(Math.floor(Math.random() * 390) + 1)}`,
      },
      {
        name: 'Songs',
        image: `http://acnhapi.com/v1/images/songs/${(Math.floor(Math.random() * 94) + 1)}`,
      },
      {
        name: 'Credits',
        image: 'http://acnhapi.com/v1/images/furniture/FtrCorkboard_Remake_2_2',
      },
    ],
    credits: [
      {
        name: 'Api',
        image: 'http://images1.wikia.nocookie.net/__cb20100421222855/ssb/images/e/e9/AnimalCrossingSymbol.svg',
        external: 'http://acnhapi.com/',
      },
      {
        name: 'Code',
        image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        external: 'https://github.com/YoseptF/acnh-catalog',
      },
      {
        name: 'Patterns',
        image: 'https://i.imgur.com/BfD4vws.png',
        external: 'https://bansal.io/pattern-css',
      },
      {
        name: 'Game',
        image: 'https://i.imgur.com/2Ac4f9y.png',
        external: 'https://animal-crossing.com/',
      },
    ],
  },
  reducers: {

  },
});

export const selectCredits = state => state.home.credits;
export const selectCategories = state => state.home.categories;

export default homeSlice.reducer;
