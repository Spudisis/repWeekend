import { Routes, Route } from 'react-router-dom';
import { Home } from '@Pages/Home/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/card" element={<Home />} />
    </Routes>
  );
};
