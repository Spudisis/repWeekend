import { CustomButton } from '@Components/CustomButton/CustomButton';
import { FC } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { ISingleMarket } from '../../types';
import style from './SingleMarketProduct.module.scss';

export const SingleMarketProduct: FC<ISingleMarket> = ({ name, raw_description, price, description }) => {
  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.raw_description}>{raw_description}</div>
      <div className={style.price}>{Math.floor(Number(price))} руб.</div>
      <CustomButton size="full">Добавить в корзину</CustomButton>
      <HiOutlineHeart className={style.favorite} />
    </div>
  );
};
