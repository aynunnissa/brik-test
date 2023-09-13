import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <p>Header here</p>
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
      <p>Footer</p>
    </>
  );
};

export default Layout;
