import React from 'react';
import PropType, { string } from 'prop-types';
import * as S from './Grid.styles';
import 'pattern.css';
import 'shorthandcss';

const GridItem = ({
  title, background, pattern, colors,
}) => (
  <S.GridItem colors={colors}>
    <img src={background} alt={title} className={`${pattern}`} />
    <h1 className="pattern-dots-sm bg-black white text-pattern">{title}</h1>
  </S.GridItem>
);

GridItem.propTypes = {
  title: PropType.string.isRequired,
  background: PropType.string.isRequired,
  pattern: PropType.string.isRequired,
  colors: PropType.arrayOf(string).isRequired,
};

export default GridItem;
