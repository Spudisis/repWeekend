import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InstanceMarket } from '../../http/Agent/Market.agent';
import style from './SingleMarket.module.scss';

export const SingleMarket = () => {
  const { id } = useParams();
  if (!id) return <div>Something with wrong</div>;
  const [signleMarket, setSingleMarket] = useState();

  useEffect(() => {
    try {
      const fetchSingleMarket = async () => {
        const data = await InstanceMarket.getOneMarket(Number(id));
        setSingleMarket(data);
      };
      fetchSingleMarket();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(signleMarket);

  return (
    <div className={style.singleMarket}>
      <div className="container">
        <div className={style.wrapper}></div>
      </div>
    </div>
  );
};
