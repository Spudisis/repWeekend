import Title from '@Components/Title';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InstanceCart } from '../../http/Agent/Cart.agent';
import { Layout } from '../../layout/Layout';
import style from './SingleProduct.module.scss';
import { Review } from '@Components/Review/Review';
import SimpleImageSlider from 'react-simple-image-slider';
import empty from '../../assets/unnamed.png'

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

 

  return (
    <Layout>
      <div className={style.product}>
        <div className="container">
          <Title headingType="h2">{currentProduct?.name}</Title>
          <div className={style.wrapper}>
            <div className={style.block}>
            {currentProduct?.images ? <SimpleImageSlider
                width={600}
                height={400}
                images={currentProduct?.images}
                showBullets={true}
                showNavs={true}
              />: <img src={empty} alt="empty" className={style.image} />}
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
