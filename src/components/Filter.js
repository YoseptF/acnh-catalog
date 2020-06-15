import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as S from './App.styles';
import back from '../images/back.svg';
import { updateFilter, selectFilters } from '../slices/current/currentSlice';

const Filter = ({ searchbar }) => {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const { category, item } = useParams();
  const dispatch = useDispatch();

  const filter = useSelector(selectFilters);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < scroll;
      setScroll(window.scrollY);
      setVisible(scrollCheck);
    });
  });

  const updateReduxFilter = e => {
    dispatch(updateFilter({ ...filter, name: e.target.value }));
  };


  return (
    <S.Filter className={visible ? '' : 'hidden'}>
      <Link to={`/${item ? category : ''}`}>
        <img src={back} alt="back" />
      </Link>
      {searchbar
        && <input className="filter-input" placeholder="search" value={filter.name} onChange={updateReduxFilter} />}
    </S.Filter>
  );
};

Filter.propTypes = {
  searchbar: PropTypes.bool.isRequired,
};

export default Filter;
