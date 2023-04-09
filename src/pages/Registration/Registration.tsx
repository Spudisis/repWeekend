import React from 'react';
import { Layout } from '../../layout/Layout';
import style from './Registation.module.scss';
import { CustomButton } from '@Components/CustomButton/CustomButton';
import { InstanceRegistration } from '../../http/Agent/Registation.agent';

import { InstanceLogin } from '../../http/Agent/Login.agent';
import { StoreRegistration } from './store/store';
import { StoreAuthStatus } from '../../app/Store/Auth';
import {observer} from 'mobx-react'

export const Registration = observer(() => {
  const { statusAuth } = StoreAuthStatus
  const {getCaptcha, signUp} = StoreRegistration
  const [login, setLogin] = React.useState('jfg')
  const [pass, setPass] = React.useState('sdfjdfj')
  

  React.useEffect(()=>{
    getCaptcha()
  }, [])

  const handleSubmit= async (e: any)=>{
    e.preventDefault()
    signUp({login, pass})
  }

  return (
  <Layout>
    status: {statusAuth ? 'da' :'net' }
    <form className={style.form}>
    <input type="text" onChange={(e)=>setLogin(e.target.value)} value={login} className={style.input} />
    <input type="passsword" onChange={(e)=>setPass(e.target.value)} value={pass} className={style.input} />
    <CustomButton onClick={(e)=>handleSubmit(e)}>Отравить</CustomButton>
    </form>
  </Layout>);
});
