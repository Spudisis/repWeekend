import { Routes, Route } from 'react-router-dom';
import { Home } from '@Pages/Home/Home';
import { Favorites } from '@Pages/Favorites/Favorites';
import { Cart } from '@Pages/Cart';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
