import { AppRouter } from '../router/AppRouter';
import '../styles/global.scss';
import React from 'react';
import { StoreAuthStatus } from './Store/Auth';
import { observer } from 'mobx-react';
import { CircularProgress, Container } from '@mui/material';

function App() {
  const { checkAuth } = StoreAuthStatus;
  const [status, setStatus] = React.useState(false);
  React.useEffect(() => {
    const f = async () => {
      try {
        await checkAuth();
      } catch (error) {
      } finally {
        setStatus(true);
      }
    };
    f();
  }, []);

  return (
    <>
      {status ? (
        <AppRouter />
      ) : (
        <Container fixed sx={{ height: '100vh', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          <CircularProgress />
        </Container>
      )}
    </>
  );
}

export default observer(App);
