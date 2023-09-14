import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import { Badge, Popover, Typography, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // Soure: mui official web
  const StyledBadge = styled(Badge)`
    & .MuiBadge-badge {
        border: 1px solid ${theme.palette.common.white}
    },
  `;

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <StyledBadge badgeContent={cart.totalQty} color="primary">
          <ShoppingCartIcon color="secondary" />
        </StyledBadge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          maxHeight: '80vh',
          overflow: 'auto',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
