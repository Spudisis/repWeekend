import style from './Header.module.scss';
import { Navbar } from '@Components/Navbar/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { InputSearch } from '@Components/InputSearch/InputSearch';
import { CustomLink } from '@Components/CustomLink/CustomLink';
import { ChooseCity } from '@Components/ChooseCity/ChooseCity';

import { StoreAuthStatus } from '../../app/Store/Auth';

import { ChooseCountry } from '@Components/ChooseCountry/ChooseCountry';
import { observer } from 'mobx-react';

export const Header = observer(() => {
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
            <ChooseCountry />
            <ChooseCity />
            <NavLink className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)} to="/deal">
              Сделки
            </NavLink>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
});
