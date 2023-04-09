import style from './Header.module.scss';
import { Navbar } from '@Components/Navbar/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { InputSearch } from '@Components/InputSearch/InputSearch';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.headerTop}>
            <Link to="/">
              <div className={style.logo}>Logo</div>
            </Link>
            <InputSearch />
            <Navbar />
          </div>
          <div className={style.headerBottom}>
            <div className={style.links}>
              <NavLink to={''} className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : `${style.link}`)}>
                Категории
              </NavLink>
              <NavLink to={''} className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : `${style.link}`)}>
                Магазины
              </NavLink>
              <NavLink to={''} className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : `${style.link}`)}>
                Товары
              </NavLink>
              <NavLink to={''} className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : `${style.link}`)}>
                Форум
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
