import React, { useEffect } from 'react';
import { StoreAuthStatus } from '../../app/Store/Auth';
import { useNavigate } from 'react-router-dom';
import { ProfileStore } from './store/store';
import { InstanceCart } from '../../http/Agent/Cart.agent';
import { Layout } from '../../layout/Layout';
import style from './Profile.module.scss';
import Title from '@Components/Title';
import { CustomModal } from '@Components/CustomModal/CustomModal';
import { useModal } from '../../hooks/hooks';
import { CustomButton } from '@Components/CustomButton/CustomButton';
import { Button } from '@mui/material';
import { observer } from 'mobx-react';
import { ChooseCity } from '@Components/ChooseCity/ChooseCity';

export const Profile = observer(() => {
  const { statusAuth, userInfo, getLogo } = StoreAuthStatus;
  const {  getOneCity, changeDataUser } = ProfileStore;

  const [sity, setSity]= React.useState<any>('')

  const [object, setObject] = React.useState({
    btc_address: userInfo && userInfo.btc_address ? userInfo.btc_address : '',
    file: {
      name: ''
    },
    city_id: userInfo && userInfo.city_id ? userInfo.city_id : '',
  })

  const redirect = useNavigate();
  const { toggleModal, isVisible } = useModal();

  useEffect(() => {
    !statusAuth && redirect('/login');
  }, []);

  useEffect(() => {
    InstanceCart.getCart();
  }, []);
  

  useEffect(()=>{
    const func = async()=>{

      if(userInfo?.city_id){
        const data =  await getOneCity(userInfo.city_id)
        setSity(data)
      }   
    }
    func()
  }, [userInfo?.city_id])

 
  const Change = (n:any)=> {
    console.log(n)
    if (n){
      setObject({...object, city_id: n.id ? n.id : object.city_id})

    }
  }
  
  return (
    <Layout>
      <CustomModal toggleModal={toggleModal} isVisible={isVisible}>
        
        <form className={style.form}>
          <Title headingType="h3">Внесите изменения</Title>
          <div className={style.inputs}>
            <ChooseCity  value={object.city_id} func={Change} />
            <input type="text" className={style.input} placeholder="Btc адресс" value={object.btc_address} onChange={(e:any)=> setObject({...object, btc_address: e.target.value})} />
            <Button
              variant="contained"
              component="label"
            >
              Upload File {object.file && object.file.name ? object.file.name : ''}
              <input type="file" hidden onChange={(e:any)=> setObject({...object, file: e.target.files[0]})} />
            </Button>
           
            <Button variant="outlined" onClick={()=>changeDataUser(userInfo.id, object)}>Изменить</Button>
          </div>
        </form>
      </CustomModal>
      <div className={style.profile}>
        <div className="container">
          <div className={style.wrapper}>
            <Title headingType="h3" position="center">
              Профиль
            </Title>
            <div className={style.user}>
              <div className={style.avatar} style={{ background: '' }}></div>
              <div className={style.name}>username: {userInfo?.username ? userInfo?.username : ''}</div>
            </div>

            <div className={style.city}>city: {sity ? sity.name : ''}</div>

            <div className={style.btc}>
              <div className={style.balance}>btc_balance: {userInfo?.btc_balance ? userInfo?.btc_balance : ''}</div>
              <div className={style.balance}>btc_address: {userInfo?.btc_address ? userInfo?.btc_address : ''}</div>
            </div>

            <div className={style.btns}>
              <CustomButton size="full" onClick={toggleModal}>
                Изменить профиль
              </CustomButton>
              {/* <button onClick={() => changeLogoUser(userInfo.id, file)}>kkkk</button> */}
            </div>

            {/* <input type="file" onChange={setFile}  /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
});
