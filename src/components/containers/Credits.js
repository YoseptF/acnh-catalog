import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '../presentationals/App.styles';
import Filter from './Filter';
import Grid from './Grid';
import { selectCredits } from '../../slices/home/homeSlice';

const Credits = () => {
  const credits = useSelector(selectCredits);

  return (
    <S.Credits>
      <Filter />
      <Grid items={credits} external />
    </S.Credits>
  );
};

export default Credits;
