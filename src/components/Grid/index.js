import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './Grid.styles';
import GridItem from './GridItem';
import { selectCategories } from '../../slices/list/listSlice';

const Grid = () => {
  const categories = useSelector(selectCategories);
  const gridStyles = [
    'pattern-checks-md',
    'pattern-diagonal-lines-md',
    'pattern-vertical-lines-md',
    'pattern-horizontal-lines-md',
    'pattern-diagonal-stripes-md',
    'pattern-horizontal-stripes-md',
    'pattern-vertical-stripes-md',
    'pattern-triangles-md',
    'pattern-zigzag-md',
    'pattern-grid-md',
    'pattern-dots-md',
    'pattern-cross-dots-md',
  ];

  const colors = [
    ['#4a5aef', '#94a2ff'],
    ['#1e4c21', '#5acaff'],
    ['#7bc2f7', '#e3e4f7'],
    ['#409952', '#42ae5a'],
    ['#b7b6b5', '#ece4d9'],
    ['#b53549', '#efa2b2'],
    ['#f7d263', '#b66910'],
    ['#983619', '#954524'],
  ];

  const randomColors = () => colors[Math.floor(Math.random() * colors.length)];
  const randomStyle = () => gridStyles[Math.floor(Math.random() * gridStyles.length)];

  return (
    <S.Grid className="pattern-dots-xl bg-blue-darkest blue">
      {categories.map(
        category => (
          <GridItem
            title={category.name}
            background={category.image}
            key={category.name}
            pattern={randomStyle()}
            colors={randomColors()}
          />
        ),
      )}
    </S.Grid>
  );
};

export default Grid;
