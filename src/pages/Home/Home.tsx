import { TextField, Container } from '@mui/material';
import { Layout } from '../../layout/Layout';

export const Home = () => {
  return (
    <Layout>
      HOMEPAGE
      <Container maxWidth="lg">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Container>
    </Layout>
  );
};
