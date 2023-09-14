import { Button, Container } from '@mui/material';
import { useEffect } from 'react';

import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../store/actions/action';

const Layout = ({ auth, cart, logout, children }) => {
  const push = useNavigate();

  useEffect(() => {
    if (!auth.isLoggedIn) {
      push('/auth/login');
    }
  }, []);
  return (
    <>
      <p>Header here</p>
      <p>User: {auth.isLoggedIn ? 'ada' : 'none'}</p>
      <p>Total cart: {cart.totalQty}</p>
      <Button variant="outlined" onClick={logout}>
        Logout
      </Button>
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
      <p>Footer</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { logout })(Layout);
