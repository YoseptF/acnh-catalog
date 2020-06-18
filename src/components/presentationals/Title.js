import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ image, item }) => (
  <>
    <img data-testid={`title-${item}`} className="featured" src={image} alt={item} />
    <h1>{item}</h1>
  </>
);

Title.defaultProps = {
  image: '',
  item: '',
};

Title.propTypes = {
  image: PropTypes.string,
  item: PropTypes.string,
};

export default Title;
