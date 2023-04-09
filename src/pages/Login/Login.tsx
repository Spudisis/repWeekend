import { CustomButton } from '@Components/CustomButton/CustomButton';
import { Layout } from '../../layout/Layout';
import style from './Login.module.scss';
import React from 'react';
import { StoreLogin } from './store/store';
import { observer } from 'mobx-react';
import { StoreAuthStatus } from '../../app/Store/Auth';
import Title from '@Components/Title';
import { useNavigate } from 'react-router-dom';

export const Login = observer(() => {
  const { statusAuth } = StoreAuthStatus;
  const { getCaptcha, SignIn } = StoreLogin;
  const [login, setLogin] = React.useState('goodman');
  const [pass, setPass] = React.useState('password');

  const redirect = useNavigate()
  
  React.useEffect(()=>{
    if (statusAuth) redirect('/profile')
  }, [statusAuth])

  React.useEffect(() => {
    getCaptcha();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    SignIn({ login, pass });
  };

  return (
    <Layout>
      status: {statusAuth ? 'da' : 'net'}
      <form className={style.form}>
        <Title position="center" headingType="h3">
          Авторизация
        </Title>
        <div className={style.content}>
          <input
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            className={style.input}
            placeholder="Введите логин"
          />
          <input
            type="passsword"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            className={style.input}
            placeholder="Введите пароль"
          />
          <CustomButton onClick={(e) => handleSubmit(e)}>Отравить</CustomButton>
        </div>
      </form>
    </Layout>
  );
});
