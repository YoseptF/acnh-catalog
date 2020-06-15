import React from 'react';
import * as S from './App.styles';
import logo from '../images/logo.svg';

const Loader = ({ hidden }) => (
  <S.Loader hidden={hidden}>
    <img src={logo} alt="logo" />
    <h1 className="pattern-dots-sm text-pattern">Loading</h1>
  </S.Loader>
);

export default Loader;
