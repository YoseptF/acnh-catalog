import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Filter from '../Filter';
import { selectInfo, updateFromApi, selectLanguage } from '../../slices/current/currentSlice';
import * as S from './Item.styles';
import Attributes from './Attributes';
import Title from './Title';

const Item = () => {
  const { category, item } = useParams();
  const language = useSelector(selectLanguage);
  const dataArray = useSelector(selectInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(dataArray).length) dispatch(updateFromApi(category.toLowerCase(), language));
  }, [category, dispatch, dataArray, language]);

  const currentData = Object.values(dataArray).filter(data => data.name[`name-${language}`] === item)[0];

  return (
    <S.Item>
      <Filter />
      {
        currentData
        && (typeof currentData !== 'number')
        && (
        <>
          <Title image={currentData.image_uri} item={item} />
          <Attributes currentData={currentData} item={item} language={language} />
        </>
        )
      }
    </S.Item>
  );
};

export default Item;
