import React from 'react';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

type Layout = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
