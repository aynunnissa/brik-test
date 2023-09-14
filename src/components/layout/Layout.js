import { Container } from '@mui/material';

import { connect } from 'react-redux';

const Layout = ({ cart, children }) => {
  return (
    <>
      <p>Header here</p>
      <p>Total cart: {cart.totalQty}</p>
      <Container maxWidth="xl" component="main">
        {children}
      </Container>
      <p>Footer</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Layout);
