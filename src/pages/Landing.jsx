import { FeaturedProducts, Hero } from '../components';
import Contact from '../components/Contact';
import Map from '../components/Map';

import { customFetch } from '../utils';
const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Contact/>
      <Map/>
    </>
  );
};
export default Landing;
