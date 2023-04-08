import React from 'react';
import { Footer } from './footer/footer';
import { Header } from './header/header';

type Layout = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
