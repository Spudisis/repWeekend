import Title from '@Components/Title';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InstanceCart } from '../../http/Agent/Cart.agent';
import { Layout } from '../../layout/Layout';
import style from './SingleProduct.module.scss';
import { Review } from '@Components/Review/Review';

export const SingleProduct = () => {
  const [currentProduct, setCurrentProduct] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    const currentProductPage = async () => {
      const data = await InstanceCart.getProduct(id);
      setCurrentProduct(data);
    };
    currentProductPage();
  }, []);

  console.log('Cuurentproduct', currentProduct);

  return (
    <Layout>
      <div className={style.product}>
        <div className="container">
          <Title headingType="h2">{currentProduct?.name}</Title>
          <div className={style.wrapper}>
            <div className={style.block}>
              <div className={style.description}>{currentProduct?.description}</div>
              <div className={style.raw_description}>{currentProduct?.raw_description}</div>
              <div className={style.price}>{Math.floor(currentProduct?.price)} руб.</div>
              <Review id={currentProduct?.id} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
