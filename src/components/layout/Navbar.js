import React from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Cart from '../cart/Cart';
import { Link, useNavigate } from 'react-router-dom';
import { logout, resetCart } from '../../store/actions/action';
import { connect } from 'react-redux';

import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({ logout, resetCart, auth }) => {
  const theme = useTheme();
  const push = useNavigate();

  const logoutHandler = () => {
    resetCart();
    logout();
  };

  const CustomTextField = styled(TextField)`
    flex-grow: 1;

    & .MuiInputBase-root {
      background-color: #ffffff;
    }
  `;

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={50}>
      <Paper
        sx={{
          backgroundColor: theme.palette.primary.main,
          py: 3,
          px: { xs: 1, sm: 3 },
          borderRadius: 0,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          gap={{ xs: 2, md: 5 }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="div" color="secondary">
              SHOFEE
            </Typography>
          </Link>
          <CustomTextField
            id="search"
            type="text"
            placeholder="Cari produk"
            color="secondary"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {auth.isLoggedIn && (
            <Stack direction="row" gap={1} alignItems="center">
              <Cart />
              <IconButton onClick={logoutHandler}>
                <LogoutIcon color="secondary" />
              </IconButton>
            </Stack>
          )}
          {!auth.isLoggedIn && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => push('/auth/login')}
            >
              Masuk
            </Button>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout, resetCart })(Navbar);
