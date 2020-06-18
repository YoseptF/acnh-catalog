import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';
import * as S from './Item.styles';

const attributeSwitcher = (id, value, language) => {
  const unSluggedId = id.replace(/-|_/g, ' ');
  switch (id) {
    case 'name': {
      return (
        <>
          <li key={id} className="title">{unSluggedId}</li>
          <li key={value} className="value">{value[`name-${language}`]}</li>
        </>
      );
    }
    case 'availability':
      return (
        <>
          {Object.entries(value).map(([id, value]) => {
            const unSluggedId = id.replace(/-|_/g, ' ');
            switch (id) {
              case 'isAllDay':
              case 'isAllYear':
                return (
                  <S.Attribute key={uid()}>
                    <li key={id} className="title">{unSluggedId}</li>
                    <li key={value} className="value">{value.toString()}</li>
                  </S.Attribute>
                );
              case 'month-array-northern':
              case 'month-array-southern':
                return '';

              default:
                return (
                  <S.Attribute key={uid()}>
                    <li key={id} className="title">{unSluggedId}</li>
                    <li key={value} className={`value ${value.split('').lenght > 15 ? 'long' : ''}`}>
                      {value}
                    </li>
                  </S.Attribute>
                );
            }
          })}
        </>
      );
    case 'catch-translations':
      return (
        <>
          <li key={id} className="title">{unSluggedId}</li>
          <li key={value} className="value">{value[`catch-${language}`]}</li>
        </>
      );
    case 'isOrderable':
      return (
        <>
          <li key={id} className="title">{unSluggedId}</li>
          <li key={value} className="value">{value.toString()}</li>
        </>
      );
    case 'price':
    case 'sell-price':
    case 'price-flick':
    case 'price-cj':
    case 'buy-price':
      return (
        <>
          <li key={id} className="title">{unSluggedId}</li>
          <li key={value} className="value">{value}</li>
        </>
      );
    case 'file-name':
    case 'alt-catch-phrase':
    case 'id':
      return '';
    default: {
      return (
        <>
          <li key={id} className="title">{unSluggedId}</li>
          <li key={value} className={`value ${value.split('').length > 15 ? 'long' : ''}`}>
            {value}
          </li>
        </>
      );
    }
  }
};

const Attributes = ({ currentData, language }) => (
  <ul>
    { currentData
       && Object.entries(currentData)
         .map(([id, value]) => (
           <S.Attribute key={uid()}>
             {attributeSwitcher(id, value, language)}
           </S.Attribute>
         ))}
  </ul>
);

Attributes.propTypes = {
  currentData: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  language: PropTypes.string.isRequired,
};

export default Attributes;
