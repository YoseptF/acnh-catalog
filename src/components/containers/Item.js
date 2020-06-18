import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';
import { selectInfo, updateFromApi, selectLanguage } from '../../slices/current/currentSlice';
import * as S from '../presentationals/Item.styles';
import Attributes from '../presentationals/Attributes';
import Title from '../presentationals/Title';

const Item = () => {
  const { category, item } = useParams();
  const language = useSelector(selectLanguage);
  const dataArray = useSelector(selectInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(dataArray).length) dispatch(updateFromApi(category.toLowerCase(), language));
  }, []); // eslint-disable-line

  const currentData = Object.values(dataArray).filter(data => data.name[`name-${language}`] === item)[0];
  return (
    <S.Item>
      <Filter />
      {
        currentData
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
