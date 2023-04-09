import { ShopCard } from '@Components/ShopCard/ShopCard';
import { Layout } from '../../layout/Layout';
import style from './Home.module.scss';
import { InstanceMarket } from '../../http/Agent/Market.agent';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [allShops, setAllShops] = useState<any>();

  useEffect(() => {
    const fetchShops = async () => {
      const data = await InstanceMarket.getAllMarkets();
      setAllShops(data);
    };
    fetchShops();
  }, []);

  return (
    <Layout>
      <main className={style.main}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.wrapperShops}>
              {allShops?.map((shop: any) => (
                <ShopCard key={shop.id} {...shop} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
