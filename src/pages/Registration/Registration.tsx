import React from 'react';
import { Layout } from '../../layout/Layout';
import style from './Registation.module.scss';
import { CustomButton } from '@Components/CustomButton/CustomButton';
import { StoreRegistration } from './store/store';
import { StoreAuthStatus } from '../../app/Store/Auth';
import { observer } from 'mobx-react';
import Title from '@Components/Title';
import { useNavigate } from 'react-router-dom';
import { StoreLogin } from '@Pages/Login/store/store';

export const Registration = observer(() => {
  const { statusAuth, checkAuth } = StoreAuthStatus;
  const redirect = useNavigate();
  const { getCaptcha, signUp } = StoreRegistration;
  const [login, setLogin] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [err, setErr] = React.useState('');
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    if (statusAuth) redirect('/profile');
  }, [statusAuth]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoader(true);
      setErr('');
      await getCaptcha();
      const data = await signUp({ login, pass });
      console.log(data);
      if (data.id) {
        await StoreLogin.getCaptcha();
        await StoreLogin.SignIn({ login, pass });
      }
    } catch {
      setErr('Произошла ошибка при создании');
    } finally {
      setLoader(false);
    }
  };

  return (
    <Layout>
      <form className={style.form}>
        <Title headingType="h3" position="center">
          Регистрация
        </Title>
        <div className={style.content}>
          <label>
            min 5 characters, and max 32
            <input
              type="text"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              className={style.input}
              placeholder="Введите логин"
            />
          </label>
          <label>
            min 8 characters, and max 32
            <input
              type="passsword"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              className={style.input}
              placeholder="Введите пароль"
            />
          </label>
          <CustomButton onClick={(e) => handleSubmit(e)} disabled={loader}>
            Отравить
          </CustomButton>
          <div>{err && err}</div>
        </div>
      </form>
    </Layout>
  );
});
