import { Grid } from '@mui/material';
import ProductCard from '../components/cards/ProductCard';

const ProductsPage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {Array.from({ length: 6 }, () => (
          <Grid item xs={2}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsPage;
