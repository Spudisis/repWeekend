import style from './Header.module.scss';
import { Navbar } from '@Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { InputSearch } from '@Components/InputSearch/InputSearch';
import { CustomLink } from '@Components/CustomLink/CustomLink';
import { ChooseCity } from '@Components/ChooseCity/ChooseCity';
import { StoreAuthStatus } from '../../app/Store/Auth';

export const Header = () => {
  const { statusAuth, userInfo } = StoreAuthStatus;

  console.log(statusAuth);
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.headerTop}>
            <Link to="/">
              <div className={style.logo}>Logo</div>
            </Link>

            <InputSearch />
            {!statusAuth && (
              <div className={style.auth}>
                <CustomLink path="/login">Войти</CustomLink>
                <CustomLink path="/registration">Зарeгистрироваться</CustomLink>
              </div>
            )}
          </div>
          <div className={style.headerBottom}>
            <ChooseCity />
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};
