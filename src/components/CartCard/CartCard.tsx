import { ISingleMarket } from '../../types';
import { FC } from 'react';
import style from './CartCard.module.scss';

export const CartCard: FC<ISingleMarket> = ({ name, raw_description, price }) => {
  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.raw_description}>{raw_description}</div>
      <div className={style.price}>{Math.floor(Number(price))} руб.</div>
    </div>
  );
};
