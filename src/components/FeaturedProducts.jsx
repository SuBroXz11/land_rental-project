import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = () => {
  return (
    <div className='align-element py-20'>
      <SectionTitle text='Lands for sale'/>
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
