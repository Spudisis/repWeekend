import { ShopCard } from '@Components/ShopCard/ShopCard';
import { ALL_SHOPS } from '../../data';
import { Layout } from '../../layout/Layout';
import style from './Home.module.scss';

export const Home = () => {
  return (
    <Layout>
      <main className={style.main}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.wrapperShops}>
              {ALL_SHOPS.map((shop) => (
                <ShopCard key={shop.uuid} {...shop} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
