import style from './FavoriteCard.module.scss';
import { FC, useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { StoreFavorites } from '@Components/SingleMarketProduct/store/favorites';
import { InstanceCart } from '../../http/Agent/Cart.agent';
import SimpleImageSlider from 'react-simple-image-slider';
import empty from '../../assets/unnamed.png'
import { InstancePhoto } from '../../http/Agent/Photo.agent';
export const FavoriteCard: FC<any> = ({ favorite }) => {
  const [favoriteData, setFavoriteData] = useState<any>();
  const { removeFavorite } = StoreFavorites;
  const [newMas, setNewMas] = useState<any>([])
  useEffect(() => {
    const fetchSingleProduct = async () => {
      if (favorite.product_id) {
        const data = await InstanceCart.getProduct(favorite.product_id);
        setFavoriteData(data);
      }
    };
    fetchSingleProduct();
  }, [favorite.product_id]);

  useEffect(()=>{
   if(favoriteData && favoriteData.images &&  favoriteData.images.length>0){
     
      const f = async ()=>{
        const masNew = favoriteData.images.map(async (id:string)=> {
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
  }, [favoriteData])

  return (
    <div className={style.card}>
        {newMas.length>0 ? 
        <SimpleImageSlider
                width={250}
                height={250}
                images={newMas}
                showBullets={true}
                showNavs={true}
              />: 
          <img src={empty} alt="empty" className={style.image} />}
      <div className={style.name}>{favoriteData?.name}</div>
      <div className={style.raw_description}>{favoriteData?.raw_description}</div>
      <div className={style.price}>{Math.floor(favoriteData?.price)} руб.</div>
      <AiFillHeart onClick={() => removeFavorite({ product_id: favorite.product_id })} className={style.remove} />
    </div>
  );
};
