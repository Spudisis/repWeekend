import React from 'react';
import { StoreAuthStatus } from '../../app/Store/Auth';
import { useNavigate } from 'react-router-dom';
import { ProfileStore } from './store/store';
import { InstanceCart } from '../../http/Agent/Cart.agent';


export const Profile = () => {
  const {statusAuth, userInfo} = StoreAuthStatus
  const {changeLogoUser} = ProfileStore
  const [file, setNameFile]=  React.useState('')
  const redirect = useNavigate()
  !statusAuth && redirect('/login')
  
  React.useEffect(()=>{
    InstanceCart.getCart()
  }, [])

  const SetFile = (e:any)=>{

  }

  return <div> 
    <button onClick={()=>changeLogoUser(userInfo.id, file)}>kkkk</button> 
    {/* <input type="file" onChange={setFile}  /> */}
  </div>;
};
