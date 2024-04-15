import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';
import TestProductGrid from './TestProductGrid';

const FeaturedProducts = () => {
  return (
    <div className='align-element py-5'>
      <SectionTitle text='Lands for sale'/>
      <TestProductGrid/>
    </div>
  );
};
export default FeaturedProducts;
