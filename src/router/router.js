import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/home';

// Auth
import Login from '../pages/auth/login';

// Product
import ProductsPage from '../pages/products';
import ProductDetail from '../pages/products/product';

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:slug" element={<ProductDetail />} />
    </Routes>
  );
};
export default AllRoute;
