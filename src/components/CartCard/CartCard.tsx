import { FC, useEffect, useState } from 'react';
import style from './CartCard.module.scss';
import { InstanceCart } from '../../http/Agent/Cart.agent';
import { TfiTrash } from 'react-icons/tfi';
import { StoreCart } from '@Components/SingleMarketProduct/store/cart';

export const CartCard: FC<any> = ({ product }) => {
  const [productData, setProductData] = useState<any>([]);
  const { removeSingleProduct } = StoreCart;

  const key = Object.keys(product)[0];
  const keyVal = product[key];

  useEffect(() => {
    const fetchSingleProduct = async () => {
      if (keyVal) {
        const data = await InstanceCart.getProduct(keyVal);
        setProductData(data);
      }
    };
    fetchSingleProduct();
  }, [keyVal]);

  

  return (
    <div className={style.card}>
      <div className={style.name}>{productData.name}</div>
      <div className={style.raw_description}>{productData.raw_description}</div>
      <div className={style.price}>{Math.floor(Number(productData.price))} руб.</div>
      <div className={style.quantity}>{product.value}</div>
      <TfiTrash onClick={() => removeSingleProduct({ product_id: keyVal, quantity: 1 })} className={style.remove} />
    </div>
  );
};
