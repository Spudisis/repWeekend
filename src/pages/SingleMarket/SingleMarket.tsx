import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InstanceMarket } from '../../http/Agent/Market.agent';
import { Layout } from '../../layout/Layout';
import { ISingleMarket } from '../../types';
import style from './SingleMarket.module.scss';
import { SingleMarketProduct } from '@Components/SingleMarketProduct/SingleMarketProduct';

export const SingleMarket = () => {
  const { id } = useParams();
  if (!id) return <div>something with wrong</div>;

  const [signleMarket, setSingleMarket] = useState<ISingleMarket[]>([]);
  useEffect(() => {
    try {
      const fetchSingleMarket = async () => {
        const data = await InstanceMarket.getOneMarketProducts(Number(id));
        setSingleMarket(data);
      };
      fetchSingleMarket();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Layout>
      <div className={style.singleMarket}>
        <div className="container">
          <div className={style.wrapper}>
            {signleMarket.length > 0 ? (
              <>
                {signleMarket?.map((market) => (
                  <SingleMarketProduct key={market.id} {...market} />
                ))}
              </>
            ) : (
              <div className={style.empty}>Пусто...</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
