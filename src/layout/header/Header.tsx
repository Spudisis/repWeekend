import style from './Header.module.scss';
import { Navbar } from '@Components/Navbar/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <Link to="/">
            <div className={style.logo}>Logo</div>
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
};
