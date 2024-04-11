import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );

    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section className='align-element py-20'>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/land-for-sale'>Land</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        {/* PRODUCT */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>{dollarsAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS */}
          
          {/* AMOUNT */}
          
          {/* CART BTN */}
          <div className='mt-10'>
            <button className='btn btn-secondary btn-md btn-block' onClick={addToCart}>
              Book now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
