import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import uid from 'uid';
import * as S from './App.styles';
import back from '../images/back.svg';
import { updateFilter, selectFilters, selectInfo } from '../slices/current/currentSlice';

const Filter = ({ searchbar, selectFilter }) => {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const { category, item } = useParams();
  const dispatch = useDispatch();
  const info = useSelector(selectInfo);
  const arraySelects = Object.values(info).map(item => item[selectFilter]);
  const uniqueSelects = [...new Set(arraySelects)];

  const filter = useSelector(selectFilters);

  useEffect(() => {
    dispatch(updateFilter({ name: '', selectFilter: { type: selectFilter, state: 'All' } }));
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < scroll;
      setScroll(window.scrollY);
      setVisible(scrollCheck);
    });
  }, [dispatch, selectFilter]); // eslint-disable-line

  const updateReduxFilter = e => {
    dispatch(updateFilter({ ...filter, name: e.target.value }));
  };

  const updateReduxselectFilter = e => {
    dispatch(updateFilter({
      ...filter,
      selectFilter: { type: selectFilter, state: e.target.value },
    }));
  };

  return (
    <S.Filter className={visible ? '' : 'hidden'}>
      <Link to={`/${item ? category : ''}`}>
        <img src={back} alt="back" />
      </Link>
      {searchbar
        && <input className="filter-input" placeholder="search" value={filter.name} onChange={updateReduxFilter} />}
      {selectFilter !== ''
        && (
          <div className="selectFilter">
            <label htmlFor="selectFilter">{selectFilter}</label>
            <select id="selectFilter" value={filter.selectFilter.state} onChange={updateReduxselectFilter}>
              <option>All</option>
              {
                uniqueSelects.map(selecto => <option key={uid()}>{selecto}</option>)
              }
            </select>
          </div>
        )}
    </S.Filter>
  );
};

Filter.defaultProps = {
  searchbar: false,
  selectFilter: '',
};

Filter.propTypes = {
  searchbar: PropTypes.bool,
  selectFilter: PropTypes.string,
};

export default Filter;
