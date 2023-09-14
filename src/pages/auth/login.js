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
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '@mui/material';
import { useState } from 'react';

// Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const PrimaryLink = styled(Link)`
    text-decoration: none;
    color: ${theme.palette.primary.main};
  `;

  return (
    <Stack direction="row" justifyContent="flex-end">
      <Paper elevation={0} sx={{ width: '400px', maxWidth: 'auto', p: 4 }}>
        <Typography variant="h5" component="h2">
          Log in
        </Typography>
        <Box component="form" noValidate autoComplete="off" mt={5}>
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
            <Button variant="contained">LOG IN</Button>
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

export default Login;
