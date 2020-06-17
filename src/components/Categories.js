import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import Grid from './Grid';
import {
  updateFromApi, selectLanguage, selectItems,
} from '../slices/current/currentSlice';
import Filter from './Filter';

const Categories = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const { url } = useRouteMatch();

  useEffect(() => {
    dispatch(updateFromApi(category.toLowerCase(), language));
  }, [category, language, dispatch]);

  const currentItems = useSelector(selectItems);

  return (
    <>
      <Filter currentItems={currentItems} searchbar />
      <Grid items={currentItems} url={url} />
    </>
  );
};

export default Categories;
