import style from './Navbar.module.scss';
import { HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.links}>
        <Link to="/cart">
          <HiOutlineShoppingCart className={style.link} />
        </Link>
        <Link to="/favorites">
          <HiOutlineHeart className={style.link} />
        </Link>
        <Link to="">
          <HiOutlineUser className={style.link} />
        </Link>
        <Link to="">
          <HiOutlineBell className={style.link} />
        </Link>
      </div>
    </nav>
  );
};
