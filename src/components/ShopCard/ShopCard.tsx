import { FC } from 'react';
import { IShop } from '../../types';
import { IoIosStarOutline } from 'react-icons/io';
import style from './ShopCard.module.scss';
import { CustomLink } from '@Components/CustomLink/CustomLink';
import { Link, useNavigate } from 'react-router-dom';

export const ShopCard: FC<IShop> = ({ name, raw_description, rating, id }) => {
  const navigate = useNavigate();
  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.rating}>
        {Math.round(rating)} / 10
        <IoIosStarOutline className={style.icon} />
      </div>
      <div className={style.description}>{raw_description}</div>
      <CustomLink path={`/market/${id}`} size="full">
        Посмотреть
      </CustomLink>
      <button onClick={() => navigate(`/market/${id}`)}>Посмотреть</button>
    </div>
  );
};
