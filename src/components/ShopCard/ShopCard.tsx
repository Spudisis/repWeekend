import { FC } from 'react';
import { IShop } from '../../types';
import { IoIosStarOutline } from 'react-icons/io';
import style from './ShopCard.module.scss';
import { CustomLink } from '@Components/CustomLink/CustomLink';
import unnamed from '../../assets/unnamed.png'

  import React from 'react';
import { InstancePhoto } from '../../http/Agent/Photo.agent';

export const ShopCard: FC<IShop & any> = ({ name, description, raw_description, rating, id, avatar }) => {
  const [data, SetData] = React.useState<any>('')
  
  React.useEffect(()=>{
    const f = async()=>{
      if (avatar){
        try {  
          const res = await InstancePhoto.getPhoto(avatar)
       
          SetData(res)
        } catch  {
          
        }
      }
      
    }
    f()
  }, [avatar])
  return (
    <div className={style.card}  >
      
      <img src={data ? data :unnamed } alt={name} className={style.img} />
      <div className={style.name}>{name}</div>

      <div className={style.description}>{description}</div>
      <div className={style.description}>{raw_description}</div>
      
      <div className={style.rating}>
        {Math.round(rating)} / 10
        <IoIosStarOutline className={style.icon} />
      </div>
      <CustomLink path={`/market/${id}`} size="full">
        Посмотреть
      </CustomLink>
    </div>
  );
};
