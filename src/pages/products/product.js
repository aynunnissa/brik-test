import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router';
import AddIcon from '@mui/icons-material/Add';

const ProductDetail = () => {
  const { slug } = useParams();

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
      <Grid item xs={12} md={5} lg={3}>
        <Paper elevation={0} sx={{ p: 3 }}>
          <img
            src="https://assets.klikindomaret.com/products/20037353/20037353_thumb.jpg?Version.20.01.1.01"
            alt={slug}
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={7} lg={9}>
        <Paper elevation={0} sx={{ p: 4 }}>
          <Typography variant="h5">
            Nong Shim Instant Fried Noodle Beef Bulgogi 105G
          </Typography>
          <Typography variant="body1" component="p" color="primary">
            Rp 4.900
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>QTY</Box>
            <Button variant="contained" startIcon={<AddIcon />}>
              Keranjang
            </Button>
          </Stack>
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

export default ProductDetail;
