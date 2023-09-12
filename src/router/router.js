import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/home';

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};
export default AllRoute;
