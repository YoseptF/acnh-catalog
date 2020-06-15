/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const currentSlice = createSlice({
  name: 'current',
  initialState: {
    filters: {
      name: '',
    },
    loading: true,
    info: {},
    items: [],
    language: 'USen',
  },
  reducers: {
    updateInfo: (state, action) => {
      state.items = action.payload.items;
      state.info = action.payload.info;
    },
    startLoading: state => { state.loading = false; },
    finishLoading: state => { state.loading = true; },
    updateFilter: (state, action) => { state.filters = action.payload; },
  },
});

export const {
  updateInfo, startLoading, finishLoading, updateFilter,
} = currentSlice.actions;

export const selectInfo = state => state.current.info;
export const selectItems = state => state.current.items;
export const selectLanguage = state => state.current.language;
export const selectLoading = state => state.current.loading;
export const selectFilters = state => state.current.filters;

export const updateFromApi = (type, language) => async dispatch => {
  dispatch(startLoading());
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
  dispatch(finishLoading());
};

export default currentSlice.reducer;
