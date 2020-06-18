import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import Grid from './Grid';
import {
  updateFromApi, selectLanguage, selectItems,
} from '../../slices/current/currentSlice';
import Filter from './Filter';

const Categories = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const { url } = useRouteMatch();

  useEffect(() => {
    dispatch(updateFromApi(category.toLowerCase(), language));
  }, []); // eslint-disable-line

  const currentItems = useSelector(selectItems);

  let navFilter;

  switch (category) {
    case 'Villagers':
      navFilter = 'personality';
      break;
    case 'Fish':
    case 'Bugs':
    case 'Fossils':
      navFilter = 'price';
      break;

    default:
      break;
  }

  return (
    <>
      <Filter currentItems={currentItems} searchbar selectFilter={navFilter} />
      <Grid items={currentItems} url={url} />
    </>
  );
};

export default Categories;
