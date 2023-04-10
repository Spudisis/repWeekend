import { CustomButton } from '@Components/CustomButton/CustomButton';
import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { ISingleMarket } from '../../types';
import style from './SingleMarketProduct.module.scss';
import { StoreCart } from './store/cart';
import { StoreFavorites } from './store/favorites';
import empty from '../../assets/unnamed.png'
import SimpleImageSlider from 'react-simple-image-slider';
import React from 'react';
import { InstancePhoto } from '../../http/Agent/Photo.agent';

export const SingleMarketProduct: FC<ISingleMarket & any> = ({ name, raw_description, price, id, images }) => {
  const navigate = useNavigate();
  const { addToCart } = StoreCart;
  const { addToFavorite } = StoreFavorites;
  const [newMas, setNewMas] = React.useState<any>([])
  React.useEffect(()=>{
    if(images &&  images.length>0){
       const f = async ()=>{
         const masNew = images.map(async (id:string)=> {
           const res = await InstancePhoto.getPhoto(id)
           return res
         })
          Promise.all(masNew).then((res)=>{
          
           const newDta = res.map((elem:any)=>{ return {'url': elem}})
           setNewMas(newDta)
         })
       }
       f()
     }
   }, [images])
  return (
    <div className={style.card}>
      {newMas.length>0 ? 
        <SimpleImageSlider
                width={600}
                height={400}
                images={newMas}
                showBullets={true}
                showNavs={true}
              />: 
          <img src={empty} alt="empty" className={style.image} />}
      <div className={style.name}>{name}</div>
      <div className={style.raw_description}>{raw_description}</div>
      <div className={style.price}>{Math.floor(Number(price))} руб.</div>
      <CustomButton onClick={() => addToCart({ product_id: id, quantity: 1 })} size="full">
        Добавить в корзину
      </CustomButton>

      <CustomButton btnType="outlined" onClick={() => navigate(`/product/${id}`)} size="full">
        Посмотреть
      </CustomButton>
      <AiOutlineHeart onClick={() => addToFavorite({ product_id: id })} className={style.favorite} />
    </div>
  );
};
