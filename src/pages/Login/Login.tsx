import { CustomButton } from '@Components/CustomButton/CustomButton';
import { Layout } from '../../layout/Layout';
import style from './Login.module.scss';
import React from 'react';
import { StoreLogin } from './store/store';
import {observer}from 'mobx-react'
import { StoreAuthStatus } from '../../app/Store/Auth';

export const Login = observer(() => {
  const { statusAuth } = StoreAuthStatus
  const {getCaptcha, SignIn} = StoreLogin
  const [login, setLogin] = React.useState('goodman')
  const [pass, setPass] = React.useState('password')
 

  React.useEffect(()=>{
    getCaptcha()
  }, [])

  const handleSubmit= async (e: any)=>{
    e.preventDefault()
    SignIn({login, pass})
  }
  
  return (
    <Layout>
      status: {statusAuth ? 'da' :'net' }
      <form className={style.form}>
        <input type="text" onChange={(e)=>setLogin(e.target.value)} value={login} className={style.input} />
        <input type="passsword" onChange={(e)=>setPass(e.target.value)} value={pass} className={style.input} />
        <CustomButton onClick={(e)=>handleSubmit(e)}>Отравить</CustomButton>
      </form>
    </Layout>
  );
});
