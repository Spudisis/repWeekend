import { FC } from 'react';
import { IShop } from '../../types';
import { IoIosStarOutline } from 'react-icons/io';
import style from './ShopCard.module.scss';
import { CustomLink } from '@Components/CustomLink/CustomLink';

export const ShopCard: FC<IShop> = ({ name, description, rating }) => {
  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.rating}>
        {rating} / 10
        <IoIosStarOutline className={style.icon} />
      </div>
      <div className={style.description}>{description}</div>
      <CustomLink path="/">Посмотреть</CustomLink>
    </div>
  );
};
