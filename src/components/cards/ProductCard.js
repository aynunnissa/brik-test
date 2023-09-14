import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import {
  AddBox,
  IndeterminateCheckBox,
  Add as AddIcon,
} from '@mui/icons-material';

import { addToCart, incCartQty, decCartQty } from '../../store/actions/action';
import { connect } from 'react-redux';

const ProductCard = ({ product, addToCart, incCartQty, decCartQty }) => {
  function addProductToCart() {
    addToCart(product);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="/product/sasa-tepung-bumbu">
        <CardMedia
          component="img"
          height="140"
          image="https://assets.klikindomaret.com/products/20037353/20037353_thumb.jpg?Version.20.01.1.01"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            sx={{ fontWeight: 'regular' }}
          >
            Sasa Tepung Bakwan Special
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ mt: 4 }}
          >
            <Typography variant="h6" color="primary">
              Rp9.900
            </Typography>
            <Typography variant="body2">10RB+ Terjual</Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={addProductToCart}
            fullWidth
          >
            Keranjang
          </Button>
        </CardActions>
      </CardActionArea>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <IconButton onClick={() => decCartQty(product.id)}>
          <IndeterminateCheckBox color="primary" fontSize="large" />
        </IconButton>
        <TextField
          id="outlined-basic"
          size="small"
          variant="outlined"
          value={0}
          inputProps={{
            style: { padding: '5px', width: '50px', textAlign: 'center' },
          }}
        />
        <IconButton onClick={() => incCartQty(product.id)}>
          <AddBox color="primary" fontSize="large" />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default connect(null, { addToCart, incCartQty, decCartQty })(
  ProductCard
);
