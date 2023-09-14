import { Box, Grid, Stack } from '@mui/material';
import ProductCard from '../components/cards/ProductCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import productData from '../data/product.json';

const Home = () => {
  const theme = useTheme();

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.palette.primary.main};
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.secondary.main }}>
      <Stack direction="row" justifyContent="flex-end" alignItems="center">
        <StyledLink to="/products">
          Lihat Semua <EastIcon fontSize="small" />
        </StyledLink>
      </Stack>
      <Grid container spacing={2} mt={2}>
        {productData?.data.map(product => (
          <Grid key={`product-${product.id}`} item xs={2}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
