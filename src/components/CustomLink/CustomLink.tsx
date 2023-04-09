import { Link } from 'react-router-dom';
import { FC } from 'react';
import style from './CustomLink.module.scss';

type CustomLinkProps = {
  children: React.ReactNode;
  path: string;
  type?: 'outlined' | 'secondary' | 'primary';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export const CustomLink: FC<CustomLinkProps> = ({ path, children, type = 'primary', size = 'md' }) => {
  return (
    <Link to={path} className={`${style.link} ${style[type]} ${style[size]}`}>
      {children}
    </Link>
  );
};
