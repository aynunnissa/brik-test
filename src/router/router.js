import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/home';
import ProductsPage from '../pages/products';

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};
export default AllRoute;
