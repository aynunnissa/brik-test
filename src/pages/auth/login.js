import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { connect } from 'react-redux';
import { login } from '../../store/actions/action';

const Login = ({ auth, login }) => {
  const theme = useTheme();
  const push = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmitLogin = event => {
    event.preventDefault();

    const user = {
      email: 'hello@gmail.com',
    };
    login(user);

    push('/');
  };

  const PrimaryLink = styled(Link)`
    text-decoration: none;
    color: ${theme.palette.primary.main};
  `;

  useEffect(() => {
    if (auth.isLoggedIn) {
      push('/');
    }
  }, []);

  return (
    <Stack direction="row" justifyContent="flex-end">
      <Paper elevation={0} sx={{ width: '400px', maxWidth: 'auto', p: 4 }}>
        <Typography variant="h5" component="h2">
          Log in
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          mt={5}
          onSubmit={handleSubmitLogin}
        >
          <Stack gap={4}>
            <TextField
              id="outlined-required"
              label="No. Handphone/Email"
              fullWidth
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-password-input"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                fullWidth
              />
            </FormControl>
            <Button variant="contained" type="submit">
              Masuk
            </Button>
          </Stack>
        </Box>
        <Stack
          mt={5}
          direction="row"
          alignItems="center"
          gap={1}
          justifyContent="center"
        >
          <Typography variant="body2" component="p">
            Belum punya akun?
          </Typography>
          <PrimaryLink to="/auth/register">Daftar</PrimaryLink>
        </Stack>
      </Paper>
    </Stack>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(Login);
