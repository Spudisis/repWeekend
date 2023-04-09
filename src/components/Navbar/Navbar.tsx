import style from './Navbar.module.scss';
import { HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.links}>
        <Link to={''} className={style.link}>
          Категории
        </Link>
        <Link to={''} className={style.link}>
          Магазины
        </Link>
        <Link to={''} className={style.link}>
          Товары
        </Link>
        <Link to={''} className={style.link}>
          Форум
        </Link>
      </div>
      <div className={style.linksIcon}>
        <Link to="/cart">
          <HiOutlineShoppingCart className={style.linkIcon} />
        </Link>
        <Link to="/favorites">
          <HiOutlineHeart className={style.linkIcon} />
        </Link>
        <Link to="">
          <HiOutlineUser className={style.linkIcon} />
        </Link>
        <Link to="">
          <HiOutlineBell className={style.linkIcon} />
        </Link>
      </div>
    </nav>
  );
};
