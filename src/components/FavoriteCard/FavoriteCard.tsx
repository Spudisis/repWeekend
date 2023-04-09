import style from './FavoriteCard.module.scss';
import { FC, useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { StoreFavorites } from '@Components/SingleMarketProduct/store/favorites';
import { InstanceCart } from '../../http/Agent/Cart.agent';

export const FavoriteCard: FC<any> = ({ favorite }) => {
  const [favoriteData, setFavoriteData] = useState<any>();
  const { removeFavorite } = StoreFavorites;

  useEffect(() => {
    const fetchSingleProduct = async () => {
      if (favorite.product_id) {
        const data = await InstanceCart.getProduct(favorite.product_id);
        setFavoriteData(data);
      }
    };
    fetchSingleProduct();
  }, [favorite.product_id]);

  return (
    <div className={style.card}>
      <div className={style.name}>{favoriteData?.name}</div>
      <div className={style.raw_description}>{favoriteData?.raw_description}</div>
      <div className={style.price}>{Math.floor(favoriteData?.price)} руб.</div>
      <AiFillHeart onClick={() => removeFavorite({ product_id: favorite.product_id })} className={style.remove} />
    </div>
  );
};
