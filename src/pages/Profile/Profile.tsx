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

export const Profile = () => {
  const { statusAuth, userInfo } = StoreAuthStatus;
  const { changeLogoUser } = ProfileStore;
  const [file, setNameFile] = React.useState('');
  const redirect = useNavigate();
  const { toggleModal, isVisible } = useModal();
  useEffect(() => {
    !statusAuth && redirect('/login');
  }, []);

  useEffect(() => {
    InstanceCart.getCart();
  }, []);

  const SetFile = (e: any) => {};

  console.log(userInfo);

  return (
    <Layout>
      <CustomModal toggleModal={toggleModal} isVisible={isVisible}>
        <form className={style.form}>
          <Title headingType="h3">Внесите изменения</Title>
          <div className={style.inputs}>
            <input type="text" className={style.input} placeholder="Город" />
            <input type="text" className={style.input} placeholder="Btc адресс" />
            <input type="file" className={style.inputFile} />
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
              <div className={style.name}>{userInfo?.username}</div>
            </div>

            <div className={style.city}>{userInfo?.city_id}</div>

            <div className={style.btc}>
              <div className={style.balance}>{userInfo?.btc_balance}</div>
              <div className={style.balance}>{userInfo?.btc_address}</div>
            </div>

            <div className={style.btns}>
              <CustomButton size="full" onClick={toggleModal}>
                Изменить профиль
              </CustomButton>
              <button onClick={() => changeLogoUser(userInfo.id, file)}>kkkk</button>
            </div>

            {/* <input type="file" onChange={setFile}  /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
