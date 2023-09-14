import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/home';

// Auth
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

// Product
import ProductsPage from '../pages/products';
import ProductDetail from '../pages/products/product';

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};
export default AllRoute;
