import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InstanceMarket } from '../../http/Agent/Market.agent';
import style from './SingleMarket.module.scss';

export const SingleMarket = () => {
  const { id } = useParams();

  // const [signleMarket, setSingleMarket] = useState();
  // useEffect(() => {
  //   const fetchSingleShops = async () => {
  //     const data = await InstanceMarket.getOneMarket(id);
  //     setSingleMarket(data);
  //   };
  //   fetchSingleShops();
  // }, []);
  return <div className={style.singleMarket}>shop {id}</div>;
};
