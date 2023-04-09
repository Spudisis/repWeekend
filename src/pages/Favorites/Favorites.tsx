import Title from '@Components/Title';
import { Layout } from '../../layout/Layout';
import style from './Favorites.module.scss';

export const Favorites = () => {
  return (
    <Layout>
      <section className={style.favorites}>
        <div className="container">
          <div className={style.wrapper}>
            <Title headingType="h2">Избранное</Title>
          </div>
        </div>
      </section>
    </Layout>
  );
};
