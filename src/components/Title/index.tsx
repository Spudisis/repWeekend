import { FC, ReactNode } from 'react';
import style from './title.module.scss';

interface TitleI {
  headingType?: string;
  children: ReactNode;
}

const Title: FC<TitleI> = ({ children, headingType = 'h1' }) => {
  switch (headingType) {
    case 'h2':
      return <h2 className={style.title_h2}>{children}</h2>;
    case 'h3':
      return <h3 className={style.title_h2}>{children}</h3>;
    case 'h4':
      return <h4 className={style.title_h4}>{children}</h4>;
    default:
      return <h1 className={style.title_h1}>{children}</h1>;
  }
};

export default Title;
