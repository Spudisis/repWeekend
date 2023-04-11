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
import { Button, TextField, Stack } from '@mui/material';
import { observer } from 'mobx-react';
import { ChooseCity } from '@Components/ChooseCity/ChooseCity';
import { Deposit } from '@Pages/payment/Deposit';
import { CustomLink } from '@Components/CustomLink/CustomLink';
import { Withdraw } from '@Pages/payment/Withdraw';

export const Profile = observer(() => {
  const { statusAuth, userInfo, getLogo, avatar } = StoreAuthStatus;

  const { getOneCity, changeDataUser, changePassword } = ProfileStore;

  const [object, setObject] = React.useState({
    btc_address: userInfo && userInfo.btc_address ? userInfo.btc_address : '',
    file: {
      name: '',
    },
    city_id: userInfo && userInfo.city_id ? userInfo.city_id : '',
  });

  const [changePass, setChangePass] = React.useState({
    old_password: '',
    new_password: '',
  });
  React.useEffect(() => {
    getLogo();
  }, [avatar]);
  const redirect = useNavigate();
  const { toggleModal, isVisible } = useModal();
  const modal2 = useModal();

  useEffect(() => {
    !statusAuth && redirect('/login');
  }, []);

  useEffect(() => {
    InstanceCart.getCart();
  }, []);

  const Change = (n: any) => {
    console.log(n);
    if (n) {
      setObject({ ...object, city_id: n.id ? n.id : object.city_id });
    }
  };

  console.log(userInfo);

  return (
    <Layout>
      <CustomModal toggleModal={toggleModal} isVisible={isVisible}>
        <form className={style.form}>
          <Title headingType="h3">Внесите изменения</Title>
          <div className={style.inputs}>
            <ChooseCity value={object.city_id} func={Change} />
            <input
              type="text"
              className={style.input}
              placeholder="Btc адресс"
              value={object.btc_address}
              onChange={(e: any) => setObject({ ...object, btc_address: e.target.value })}
            />
            <Button variant="contained" component="label">
              Upload File {object.file && object.file.name ? object.file.name : ''}
              <input type="file" hidden onChange={(e: any) => setObject({ ...object, file: e.target.files[0] })} />
            </Button>

            <Button variant="outlined" onClick={() => changeDataUser(userInfo.id, object)}>
              Изменить
            </Button>
          </div>
        </form>
      </CustomModal>
      <div className={style.profile}>
        <div className="container">
          <Title headingType="h3" position="center">
            Профиль
          </Title>
          <div className={style.wrapper}>
            <div className={style.user_left}>
              <div className={style.avatar} style={{ background: `url(${avatar})` }}></div>

              <div className={style.btc}>
                <div className={style.balance}>btc_balance: {userInfo?.btc_balance ? userInfo?.btc_balance : ''}</div>
                <div className={style.balance}>btc_address: {userInfo?.btc_address ? userInfo?.btc_address : ''}</div>
              </div>

              <div className={style.btns}>
                <CustomButton size="full" onClick={toggleModal}>
                  Изменить профиль
                </CustomButton>
              </div>
              <div className={style.btns}>
                <CustomModal toggleModal={modal2.toggleModal} isVisible={modal2.isVisible}>
                  <Stack justifyContent="space-between">
                    <TextField
                      label="Old password"
                      variant="filled"
                      type="password"
                      value={changePass.old_password}
                      onChange={(e: any) => setChangePass({ ...changePass, old_password: e.target.value })}
                    />
                    <TextField
                      label="New Password"
                      variant="filled"
                      type="password"
                      value={changePass.new_password}
                      onChange={(e: any) => setChangePass({ ...changePass, new_password: e.target.value })}
                    />
                    <Button onClick={() => changePassword(changePass)}>Изменить</Button>
                  </Stack>
                </CustomModal>
                <CustomButton size="full" onClick={modal2.toggleModal}>
                  Изменить пароль
                </CustomButton>
                {userInfo?.role_name === 'admin' && (
                  <CustomLink path="/admin" size="full" type="outlined">
                    Панель админа
                  </CustomLink>
                )}
              </div>
            </div>
            <div className={style.user_right}>
              <div className={style.user_payment}>
                <Deposit />
                <Withdraw />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});
