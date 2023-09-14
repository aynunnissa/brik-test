import { Box, Stack, Typography, useTheme } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box p={2} sx={{ backgroundColor: theme.palette.grey[200] }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <CopyrightIcon />
        <Typography variant="caption" component="p">
          SHOFEE 2023
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
