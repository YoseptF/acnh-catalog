import React, { useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as S from './Grid.styles';
import GridItem from './GridItem';
import { selectFilters, updateFilter } from '../../slices/current/currentSlice';

const Grid = ({ items, url }) => {
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateFilter({ name: '', selectFilter: { type: category, state: 'All' } }));
  }, [dispatch, category]);
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
    ['#efb200', '#ffe1d0'],
    ['#4a5aef', '#94a2ff'],
    ['#1e4c21', '#5acaff'],
    ['#7bc2f7', '#e3e4f7'],
    ['#409952', '#42ae5a'],
    ['#b7b6b5', '#ece4d9'],
    ['#b53549', '#efa2b2'],
    ['#f7d263', '#b66910'],
    ['#983619', '#954524'],
  ];

  const currentFilter = useSelector(selectFilters);

  const randomColors = () => colors[Math.floor(Math.random() * colors.length)];
  const randomStyle = () => gridStyles[Math.floor(Math.random() * gridStyles.length)];

  return (
    <S.Grid className="pattern-dots-xl">
      {items.filter(item => {
        const searchFilter = item.name.toLowerCase().includes(currentFilter.name.toLowerCase());
        const selectFilter = `${item[currentFilter.selectFilter.type]}` === currentFilter.selectFilter.state || currentFilter.selectFilter.state === 'All';
        return searchFilter && selectFilter;
      }).map(
        item => (
          <GridItem
            title={item.name}
            background={item.image}
            key={item.name}
            pattern={randomStyle()}
            colors={randomColors()}
            url={url}
            external={item.external}
          />
        ),
      )}
    </S.Grid>
  );
};

Grid.defaultProps = {
  url: '',
};

Grid.propTypes = {
  items: PropTypes.arrayOf(object).isRequired,
  url: PropTypes.string,
};

export default Grid;
