import Title from '@Components/Title';
import { Layout } from '../../layout/Layout';
import style from './Cart.module.scss';

export const Cart = () => {
  return (
    <Layout>
      <section className={style.cart}>
        <div className="container">
          <div className={style.wrapper}>
            <Title headingType="h2">Корзина</Title>
          </div>
        </div>
      </section>
    </Layout>
  );
};
