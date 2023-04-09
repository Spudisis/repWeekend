import { useState } from 'react';
export const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };

  return { isVisible, toggleModal, closeModal, openModal };
};
