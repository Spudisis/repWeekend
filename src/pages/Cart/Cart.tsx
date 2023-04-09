import { StoreCart } from '@Components/SingleMarketProduct/store/cart';
import Title from '@Components/Title';
import { CartCard } from '@Components/CartCard/CartCard';
import { Layout } from '../../layout/Layout';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { StoreAuthStatus } from '../../app/Store/Auth';
import style from './Cart.module.scss';

export const Cart = observer(() => {
  const { getAllProducts, cart } = StoreCart;
  const { statusAuth } = StoreAuthStatus;

  useEffect(() => {
    getAllProducts();
  }, []);
this,
  console.log(statusAuth);
  console.log('Корзина', cart);

  return (
    <Layout>
      <section className={style.cart}>
        <div className="container">
          <Title headingType="h2">Корзина</Title>
          <div className={style.wrapper}>
            {cart && cart?.map((product: any) => <CartCard key={product.key} product={product} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
});
