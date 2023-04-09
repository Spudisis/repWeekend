import style from './FavoriteCard.module.scss';
import { FC } from 'react';
import { ISingleMarket } from '../../types';

export const FavoriteCard: FC<ISingleMarket> = ({ name, price, raw_description }) => {
  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.raw_description}>{raw_description}</div>
      <div className={style.price}>{Math.floor(Number(price))} руб.</div>
    </div>
  );
};
