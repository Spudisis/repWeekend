import { FC } from 'react';
import { IShop } from '../../types';
import { IoIosStarOutline } from 'react-icons/io';
import style from './ShopCard.module.scss';
import { CustomLink } from '@Components/CustomLink/CustomLink';

export const ShopCard: FC<IShop> = ({ name, raw_description, rating, id }) => {
  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.description}>{raw_description}</div>
      <div className={style.rating}>
        {Math.round(rating)} / 10
        <IoIosStarOutline className={style.icon} />
      </div>
      <CustomLink path={`/market/${id}`} size="full">
        Посмотреть
      </CustomLink>
    </div>
  );
};
