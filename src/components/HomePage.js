import React from 'react';
import { useSelector } from 'react-redux';
import Grid from './Grid';
import { selectCategories } from '../slices/home/homeSlice';

const HomePage = () => {
  const categories = useSelector(selectCategories);
  return (
    <Grid items={categories} />
  );
};

export default HomePage;
