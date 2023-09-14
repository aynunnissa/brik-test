import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  IconButton,
  TextField,
} from '@mui/material';
import { useParams } from 'react-router';

import {
  AddBox,
  IndeterminateCheckBox,
  Add as AddIcon,
} from '@mui/icons-material';

import { addToCart, incCartQty, decCartQty } from '../../store/actions/action';
import { connect } from 'react-redux';
import productData from '../../data/product.json';
import { useEffect, useState } from 'react';

const ProductDetail = ({ cart, addToCart, incCartQty, decCartQty }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const [qty, setQty] = useState(0);

  function addProductToCart() {
    addToCart(product);
  }

  useEffect(() => {
    productData?.data?.forEach(item => {
      if (item.id === id) {
        setProduct(item);
        return;
      }
    });
  }, []);

  useEffect(() => {
    setIsAdded(false);
    cart.product.forEach(item => {
      if (item.id === product?.id) {
        setIsAdded(true);
        setQty(item.qty);
        return;
      }
    });
  }, [cart, product]);

  const DescriptionItem = ({ title, content }) => {
    return (
      <Box>
        <Typography variant="body1" component="p" fontWeight="600">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {content}
        </Typography>
      </Box>
    );
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={5} lg={3}>
        <Paper elevation={0} sx={{ p: 3 }}>
          <img
            src="https://assets.klikindomaret.com/products/20037353/20037353_thumb.jpg?Version.20.01.1.01"
            alt=""
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={7} lg={9}>
        <Paper elevation={0} sx={{ p: 4 }}>
          <Typography variant="h5">
            Nong Shim Instant Fried Noodle Beef Bulgogi 105G
          </Typography>
          <Typography variant="body1" component="p" color="primary">
            Rp 4.900
          </Typography>
          {isAdded && (
            <Stack direction="row" alignItems="center">
              <Box>QTY</Box>
              <IconButton onClick={() => decCartQty(product.id)}>
                <IndeterminateCheckBox color="primary" fontSize="large" />
              </IconButton>
              <TextField
                id="outlined-basic"
                size="small"
                variant="outlined"
                value={qty}
                inputProps={{
                  style: { padding: '5px', width: '50px', textAlign: 'center' },
                }}
              />
              <IconButton onClick={() => incCartQty(product.id)}>
                <AddBox color="primary" fontSize="large" />
              </IconButton>
            </Stack>
          )}
          {!isAdded && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={addProductToCart}
              sx={{ mt: 2 }}
            >
              Keranjang
            </Button>
          )}
        </Paper>
        <Paper elevation={0} sx={{ p: 4, mt: 4 }}>
          <Stack gap={2}>
            <DescriptionItem
              title="Deskripsi Produk"
              content="Merupakan ramyun kering dengan rasa saus Bulgogi dan daging sapi
              yang memungkinkan konsumen untuk mencicipi rasa authentic
              Bulgogi dari Korea Selatan secara instant dan nyaman."
            />
            <DescriptionItem title="Berat" content="500" />
            <DescriptionItem title="Ukuran" content="5x5x5" />
            <DescriptionItem title="SKU" content="MHZVTK" />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToCart, incCartQty, decCartQty })(
  ProductDetail
);
