import style from './FavoriteCard.module.scss';
import { FC } from 'react';

export const FavoriteCard: FC<any> = ({ farovite }) => {
  console.log('Избранная карточка', farovite);

  return (
    <div className={style.card}>
      <div className={style.name}>{farovite?.id}</div>
      <div className={style.raw_description}>{farovite?.user_id}</div>
      <div className={style.price}>{Math.floor(Number())} руб.</div>
    </div>
  );
};
