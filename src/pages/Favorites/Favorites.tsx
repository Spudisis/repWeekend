import { StoreFavorites } from '@Components/SingleMarketProduct/store/favorites';
import Title from '@Components/Title';
import { useEffect, useState } from 'react';
import { Layout } from '../../layout/Layout';
import style from './Favorites.module.scss';

export const Favorites = () => {
  const { fetchAllFavorites, favorites } = StoreFavorites;

  useEffect(() => {
    fetchAllFavorites();
  }, []);

  console.log(favorites);
  if (!favorites) return null;
  return (
    <Layout>
      <section className={style.favorites}>
        <div className="container">
          <Title headingType="h2">Избранное</Title>
          <div className={style.wrapper}></div>
        </div>
      </section>
    </Layout>
  );
};
