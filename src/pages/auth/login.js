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

// hooks
import useInput from '../../hooks/use-input';

// redux
import { connect } from 'react-redux';
import { login } from '../../store/actions/action';

const isNotEmpty = value => value.trim() !== '';
const emailValidationReg = /@.*\./;
const isValidEmail = value =>
  isNotEmpty(value) && emailValidationReg.test(value);

const Login = ({ auth, login }) => {
  const theme = useTheme();
  const push = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    submitHandler: emailSubmitHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    submitHandler: passwordSubmitHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  let isFormValid = false;

  if (passwordIsValid && emailIsValid) {
    isFormValid = true;
  }

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmitLogin = event => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const user = {
      email: emailValue,
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
    <Stack direction="row" justifyContent="center">
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
              id="email"
              label="Email"
              type="text"
              placeholder="Masukkan alamat email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailHasError}
              helperText={emailHasError && 'Email tidak valid'}
              InputLabelProps={{
                shrink: true,
              }}
              required
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Masukkan password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={passwordHasError && 'Password tidak boleh kosong'}
              required
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
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
                ),
              }}
            />
            <Button variant="contained" type="submit" disabled={!isFormValid}>
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
