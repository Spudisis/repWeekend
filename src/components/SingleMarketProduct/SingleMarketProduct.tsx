import { CustomButton } from '@Components/CustomButton/CustomButton';
import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ISingleMarket } from '../../types';
import style from './SingleMarketProduct.module.scss';
import { StoreCart } from './store/cart';
import { StoreFavorites } from './store/favorites';

export const SingleMarketProduct: FC<ISingleMarket> = ({ name, raw_description, price, id }) => {
  const navigate = useNavigate();
  const { addToCart } = StoreCart;
  const { addToFavorite } = StoreFavorites;

  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.raw_description}>{raw_description}</div>
      <div className={style.price}>{Math.floor(Number(price))} руб.</div>
      <CustomButton onClick={() => addToCart({ product_id: id, quantity: 1 })} size="full">
        Добавить в корзину
      </CustomButton>

      <CustomButton btnType="outlined" onClick={() => navigate(`/product/${id}`)} size="full">
        Посмотреть
      </CustomButton>
      <AiOutlineHeart onClick={() => addToFavorite({ product_id: id })} className={style.favorite} />
    </div>
  );
};
