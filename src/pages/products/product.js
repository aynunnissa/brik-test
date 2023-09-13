import { useParams } from 'react-router';

const ProductDetail = () => {
  const { slug } = useParams();

  return <p>helloo {slug}</p>;
};

export default ProductDetail;
