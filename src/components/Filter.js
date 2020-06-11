import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from './App.styles';
import back from '../images/back.svg';

const Filter = () => {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const { category, item } = useParams();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY < scroll;
      setScroll(window.scrollY);
      setVisible(scrollCheck);
    });
  });


  return (
    <S.Filter className={visible ? '' : 'hidden'}>
      <Link to={`/${item ? category : ''}`}>
        <img src={back} alt="back" />
      </Link>
    </S.Filter>
  );
};

export default Filter;
