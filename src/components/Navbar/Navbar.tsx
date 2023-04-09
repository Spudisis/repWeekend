import style from './Navbar.module.scss';
import { HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineBell } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.links}>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}>
          Категории
        </NavLink>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}>
          Магазины
        </NavLink>
      </div>
      <div className={style.linksIcon}>
        <NavLink className={({ isActive }) => (isActive ? `${style.linkIcon} ${style.active}` : style.linkIcon)} to="/cart">
          <HiOutlineShoppingCart />
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${style.linkIcon} ${style.active}` : style.linkIcon)} to="/favorites">
          <HiOutlineHeart />
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${style.linkIcon} ${style.active}` : style.linkIcon)} to="/profile">
          <HiOutlineUser />
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? `${style.linkIcon} ${style.active}` : style.linkIcon)} to="/">
          <HiOutlineBell />
        </NavLink>
      </div>
    </nav>
  );
};
