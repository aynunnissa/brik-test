import { Box, Grid, Pagination, PaginationItem, Stack } from '@mui/material';
import ProductCard from '../components/cards/ProductCard';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import productData from '../data/product.json';

const Home = () => {
  const theme = useTheme();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${theme.palette.primary.main};
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        mb={2}
      >
        <StyledLink to="/">
          Lihat Semua <EastIcon fontSize="small" />
        </StyledLink>
      </Stack>
      <Grid container spacing={2} mt={2}>
        {productData?.data.map(product => (
          <Grid
            key={`product-${product.id}`}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box my={2}>
        <Stack direction="row" justifyContent="flex-end">
          <Pagination
            page={page}
            count={10}
            renderItem={item => (
              <PaginationItem
                component={Link}
                to={`/products${item.page === 1 ? '' : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
