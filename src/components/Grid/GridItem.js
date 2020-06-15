import React from 'react';
import PropType, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './Grid.styles';
import 'pattern.css';

const GridItem = ({
  title, background, pattern, colors, url, external,
}) => (
  <S.GridItem colors={colors} title={title}>
    {external
    && (
    <a href={external} target="_blank" rel="noreferrer">
      <img loading="lazy" src={background} alt={title} className={`${pattern}`} />
      <h1 className="pattern-dots-sm text-pattern">{title}</h1>
    </a>
    )}
    {!external
    && (
      <Link to={`${url}/${title}`}>
        <img loading="lazy" src={background} alt={title} className={`${pattern}`} />
        <h1 className="pattern-dots-sm text-pattern">{title}</h1>
      </Link>
    )}
  </S.GridItem>
);

GridItem.defaultProps = {
  external: false,
};

GridItem.propTypes = {
  external: PropType.bool,
  title: PropType.string.isRequired,
  url: PropType.string.isRequired,
  background: PropType.string.isRequired,
  pattern: PropType.string.isRequired,
  colors: PropType.arrayOf(string).isRequired,
};

export default GridItem;
