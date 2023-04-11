import { FavoriteCard } from '@Components/FavoriteCard/FavoriteCard';
import { StoreFavorites } from '@Components/SingleMarketProduct/store/favorites';
import Title from '@Components/Title';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Layout } from '../../layout/Layout';
import style from './Favorites.module.scss';

export const Favorites = observer(() => {
  const { fetchAllFavorites, favorites } = StoreFavorites;

  useEffect(() => {
    fetchAllFavorites();
  }, []);

  useEffect(() => {
    console.log('Cтраница фавориты', favorites);
  }, [favorites]);

  return (
    <Layout>
      <section className={style.favorites}>
        <div className="container">
          <Title headingType="h2">Избранное</Title>
          <div className={style.wrapper}>
            {favorites && favorites.length > 0 ? (
              favorites?.map((favorite?: any) => <FavoriteCard key={favorite.id} favorite={favorite} />)
            ) : (
              <div>Нет любимых товаров</div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
});
