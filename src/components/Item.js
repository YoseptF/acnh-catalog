import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';
import { selectInfo, updateFromApi, selectLanguage } from '../slices/current/currentSlice';
import * as S from './App.styles';

const Item = () => {
  const { category, item } = useParams();
  const language = useSelector(selectLanguage);
  const dataArray = useSelector(selectInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(dataArray).length) dispatch(updateFromApi(category.toLowerCase(), language));
  }, [category, dispatch, dataArray, language]);

  const currentData = Object.values(dataArray).filter(data => data.name[`name-${language}`] === item)[0];

  console.log((currentData));

  return (
    <S.Item>
      <Filter />
      <img className="featured" src={currentData && currentData.image_uri} alt={item} />
      <h1>{item}</h1>
      <ul>
        {currentData && Object.entries(currentData)
          .map(([key, value]) => {
            const unSluggedKey = key.replace(/-|_/g, ' ');
            switch (key) {
              case 'name': {
                return (
                  <>
                    <li className="title">{unSluggedKey}</li>
                    <li className="value">{value[`name-${language}`]}</li>
                  </>
                );
              }
              case 'availability':
                return (
                  <>
                    {Object.entries(value).map(([key, value]) => {
                      const unSluggedKey = key.replace(/-|_/g, ' ');
                      switch (key) {
                        case 'isAllDay':
                        case 'isAllYear':
                          return (
                            <>
                              <li key={key} className="title">{unSluggedKey}</li>
                              <li key={value} className="value">{value.toString()}</li>
                            </>
                          );
                        case 'month-array-northern':
                        case 'month-array-southern':
                          return '';

                        default:
                          return (
                            <>
                              <li className="title">{unSluggedKey}</li>
                              <li className={`value ${value.split('').lenght > 15 ? 'long' : ''}`}>
                                {value}
                              </li>
                            </>
                          );
                      }
                    })}
                  </>
                );
              case 'catch-translations':
                return (
                  <>
                    <li className="title">{unSluggedKey}</li>
                    <li className="value">{value[`catch-${language}`]}</li>
                  </>
                );
              case 'isOrderable':
                return (
                  <>
                    <li key={key} className="title">{unSluggedKey}</li>
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
                    <li className="title">{unSluggedKey}</li>
                    <li className="value">{value}</li>
                  </>
                );
              case 'file-name':
              case 'id':
                return '';
              default: {
                return (
                  <>
                    <li className="title">{unSluggedKey}</li>
                    <li className={`value ${value.split('').length > 15 ? 'long' : ''}`}>
                      {value}
                    </li>
                  </>
                );
              }
            }
          })}
      </ul>
    </S.Item>
  );
};

export default Item;
