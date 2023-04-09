import { CustomButton } from '@Components/CustomButton/CustomButton';
import { FC } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { ISingleMarket } from '../../types';
import style from './SingleMarketProduct.module.scss';
import { StoreCart } from './stote/store';

export const SingleMarketProduct: FC<ISingleMarket> = ({ name, raw_description, price }) => {
  const product = { name, raw_description, price };
  const { addToCart } = StoreCart;

  addToCart({
    product_id: 1,
    quantity: 1,
  });
  return (
    <div className={style.card}>
      <div className={style.name}>{name}</div>
      <div className={style.raw_description}>{raw_description}</div>
      <div className={style.price}>{Math.floor(Number(price))} руб.</div>
      <CustomButton onClick={() => addToCart(product)} size="full">
        Добавить в корзину
      </CustomButton>
      <HiOutlineHeart className={style.favorite} />
    </div>
  );
};
