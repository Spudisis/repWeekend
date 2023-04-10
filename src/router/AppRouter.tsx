import { Routes, Route } from 'react-router-dom';
import { Home } from '@Pages/Home/Home';
import { Favorites } from '@Pages/Favorites/Favorites';
import { Cart } from '@Pages/Cart/Cart';
import { Login } from '@Pages/Login/Login';
import { Registration } from '@Pages/Registration';
import { SingleMarket } from '@Pages/SingleMarket/SingleMarket';
import { NotFound } from '@Pages/NotFound/NotFound';
import { Profile } from '@Pages/Profile/Profile';
import { SingleProduct } from '@Pages/SingleProduct/SingleProduct';
import { Admin } from '@Pages/Admin/Admin';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/market/:id" element={<SingleMarket />} />
      <Route path="/product/:id" element={<SingleProduct />} />

      <Route path="/login" element={<Login />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
