import React from 'react';
import { Layout } from '../../layout/Layout';
import style from './Registation.module.scss';
import { CustomButton } from '@Components/CustomButton/CustomButton';
import { StoreRegistration } from './store/store';
import { StoreAuthStatus } from '../../app/Store/Auth';
import { observer } from 'mobx-react';
import Title from '@Components/Title';
import { useNavigate } from 'react-router-dom';

export const Registration = observer(() => {
  const { statusAuth, checkAuth } = StoreAuthStatus;
  const redirect = useNavigate()
  const { getCaptcha, signUp } = StoreRegistration;
  const [login, setLogin] = React.useState('');
  const [pass, setPass] = React.useState('');
 

  React.useEffect(()=>{
    if (statusAuth) redirect('/profile')
  }, [statusAuth])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await getCaptcha();
      const data =  await signUp({ login, pass });
      console.log(data)
      if (data.id){
        redirect('/login')
      }
    } catch  {
      
    }
   
  };

  return (
    <Layout>
     
      <form className={style.form}>
        <Title headingType="h3" position="center">
          Регистрация
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
