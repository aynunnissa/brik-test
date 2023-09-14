import { useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  product,
  cart,
  auth,
  addToCart,
  incCartQty,
  decCartQty,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [qty, setQty] = useState(0);
  const push = useNavigate();

  const handleCartClick = () => {
    if (auth.isLoggedIn) {
      addToCart(product);
    } else {
      push('/auth/login');
    }
  };

  const handleCardClick = event => {
    event.preventDefault();
    push(`/product/${product?.id}`);
  };

  useEffect(() => {
    setIsAdded(false);
    cart.product.forEach(item => {
      if (item.id === product?.id) {
        setIsAdded(true);
        setQty(item.qty);
        return;
      }
    });
  }, [cart, cart.product, product]);

  return (
    <Card>
      <CardActionArea onClick={handleCardClick}>
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
            <Typography variant="body2" textAlign="right">
              10RB+ Terjual
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!isAdded ? (
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleCartClick}
            fullWidth
          >
            Keranjang
          </Button>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: '100%' }}
          >
            <IconButton onClick={() => decCartQty(product?.id)} sx={{ py: 0 }}>
              <IndeterminateCheckBox color="primary" fontSize="large" />
            </IconButton>
            <TextField
              id="outlined-basic"
              size="small"
              variant="outlined"
              value={qty}
              inputProps={{
                style: { padding: '2px', width: '50px', textAlign: 'center' },
              }}
            />
            <IconButton onClick={() => incCartQty(product?.id)} sx={{ py: 0 }}>
              <AddBox color="primary" fontSize="large" />
            </IconButton>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToCart, incCartQty, decCartQty })(
  ProductCard
);
