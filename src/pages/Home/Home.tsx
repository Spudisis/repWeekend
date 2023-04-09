import { ShopCard } from '@Components/ShopCard/ShopCard';
import { Layout } from '../../layout/Layout';
import style from './Home.module.scss';
import { InstanceMarket } from '../../http/Agent/Market.agent';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [allMarket, setAllMarket] = useState<any>();

  useEffect(() => {
    try {
      const fetchMarket = async () => {
        const data = await InstanceMarket.getAllMarkets();
        setAllMarket(data);
      };
      fetchMarket();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Layout>
      <main className={style.main}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.wrapperMarkets}>
              {allMarket?.map((shop: any) => (
                <ShopCard key={shop.id} {...shop} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
