import { Home } from '@Pages/Home/Home';
import { AppRouter } from '../router/AppRouter';
import '../styles/global.scss';
import React from 'react';
import { InstanceLogin } from '../http/Agent/Login.agent';
import { StoreAuthStatus } from './Store/Auth';
import { observer } from 'mobx-react';

function App() {
  const { checkAuth } = StoreAuthStatus;

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default observer(App);
