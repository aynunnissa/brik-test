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
import useInput from '../../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const emailValidationReg = /@.*\./;
const isValidEmail = value =>
  isNotEmpty(value) && emailValidationReg.test(value);

const Register = ({ auth }) => {
  const theme = useTheme();
  const push = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    submitHandler: nameSubmitHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

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

  if (passwordIsValid && emailIsValid && nameIsValid) {
    isFormValid = true;
  }

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleRegistSubmit = event => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    push('/auth/login');
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      push('/');
    }
  }, []);

  const PrimaryLink = styled(Link)`
    text-decoration: none;
    color: ${theme.palette.primary.main};
  `;

  return (
    <Stack direction="row" justifyContent="center">
      <Paper elevation={0} sx={{ width: '400px', maxWidth: 'auto', p: 4 }}>
        <Typography variant="h5" component="h2">
          Daftar
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          mt={5}
          onSubmit={handleRegistSubmit}
        >
          <Stack gap={4}>
            <TextField
              id="outlined-required"
              label="Nama"
              type="text"
              placeholder="Masukkan nama lengkap"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              error={nameHasError}
              helperText={nameHasError && 'Nama tidak boleh kosong'}
              InputLabelProps={{
                shrink: true,
              }}
              required
              fullWidth
            />
            <TextField
              id="outlined-required"
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
              Daftar
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
            Sudah punya akun?
          </Typography>
          <PrimaryLink to="/auth/login">Masuk</PrimaryLink>
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

export default connect(mapStateToProps)(Register);
