import style from './CustomModal.module.scss';
import { FC } from 'react';

type IModal = {
  children: React.ReactElement;
  toggleModal: () => void;
  isVisible: boolean;
};

export const CustomModal: FC<IModal> = ({ children, toggleModal, isVisible }) => {
  return (
    <div onClick={() => toggleModal()} className={isVisible ? `${style.modal} ${style.active}` : `${style.modal}`}>
      <div onClick={(e) => e.stopPropagation()} className={isVisible ? `${style.content} ${style.active}` : `${style.content}`}>
        <div onClick={() => toggleModal()} className={style.close}>
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};
