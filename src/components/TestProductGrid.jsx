import { Link } from 'react-router-dom';
import { useState } from 'react';
import { lands } from '../data';

export default function TestProductGrid() {
  const [products, setProducts] = useState(lands); // Removed extra array brackets around lands
  return (
    <div className='pt-0 grid gap-4 md:grid-cols-2 lg:grid-cols-3 align-element py-10'>
      {products.map((product, ids) => {
        const { id,desc, price, image } = product;
        return (
          <Link
            key={ids}
            to={`/land/${id}`}
            className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
            onClick={window.scrollTo(0, 0)}
          >
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={desc}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card-body '>
              <h2 className='card-title capitalize tracking-wider items-center text-center'>Rs {price}</h2>
              <span className='text-secondary'>{desc}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
