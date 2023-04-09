import style from './Navbar.module.scss';
import { HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineBell } from 'react-icons/hi';

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.links}>
        <HiOutlineShoppingCart className={style.link} />
        <HiOutlineHeart className={style.link} />
        <HiOutlineUser className={style.link} />
        <HiOutlineBell className={style.link} />
      </div>
    </nav>
  );
};
