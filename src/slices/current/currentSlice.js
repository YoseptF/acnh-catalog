/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const currentSlice = createSlice({
  name: 'current',
  initialState: {
    info: {},
    items: [],
    language: 'USen',
    fields: {
      villagers: ['name', 'birthday', 'species', 'gender', 'catch-frase', 'image', 'personality'],
      bugs: ['name', 'aviability', 'price', 'price-flick', 'catch-frase', 'museum-frase', 'image'],
      fish: ['name', 'aviability', 'shadow', 'price', 'price-cj', 'catch-phrase', 'museum-phrase', 'image'],
      fossils: ['name', 'price', 'museum-phrase', 'image'],
      songs: ['name', 'buy-price', 'sell-price', 'Music', 'orderable', 'museum-phrase', 'image'],
    },
  },
  reducers: {
    updateInfo: (state, action) => {
      state.items = action.payload.items;
      state.info = action.payload.info;
    },
  },
});

export const { updateInfo } = currentSlice.actions;

export const selectInfo = state => state.current.info;
export const selectItems = state => state.current.items;
export const selectLanguage = state => state.current.language;

export const updateFromApi = (type, language) => async dispatch => {
  const response = await fetch(`https://acnhapi.com/v1/${type}/`);
  const info = await response.json();
  const imagetype = type === 'fish' ? 'icon' : 'image';

  const items = Object.values(info).map(
    item => (
      {
        name: item.name[`name-${language}`],
        image: item[`${imagetype}_uri`],
      }
    ),
  );

  dispatch(updateInfo({ items, info }));
};

export default currentSlice.reducer;
