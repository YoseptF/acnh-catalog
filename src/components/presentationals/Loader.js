import React from 'react';
import PropTypes from 'prop-types';
import * as S from './App.styles';
import logo from '../../images/logo.svg';

const Loader = ({ hidden }) => (
  <S.Loader hidden={hidden}>
    <img src={logo} alt="logo" />
    <h1 className="pattern-dots-sm text-pattern">Loading</h1>
  </S.Loader>
);

Loader.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

export default Loader;
