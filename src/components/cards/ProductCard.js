import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ProductCard = () => {
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
          <Button variant="outlined" startIcon={<AddIcon />} fullWidth>
            Keranjang
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
