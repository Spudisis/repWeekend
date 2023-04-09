import { CustomButton } from '@Components/CustomButton/CustomButton';
import { Layout } from '../../layout/Layout';
import style from './Login.module.scss';

export const Login = () => {
  return (
    <Layout>
      <form className={style.form}>
        <input type="text" className={style.input} />
        <input type="passsword" className={style.input} />
        <CustomButton>Отравить</CustomButton>
      </form>
    </Layout>
  );
};
