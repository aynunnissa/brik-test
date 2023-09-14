import { Container } from '@mui/material';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ pt: '100px', pb: '20px', minHeight: '100vh' }}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
