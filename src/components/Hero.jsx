import { Link } from 'react-router-dom';
import './style.css'

const Hero = () => {
  return (
    <div className="hero p-9 md:p-24 " style={{backgroundImage: 'url(https://www.gharghaderi.com/icon/newcover-min.jpg)'}}>
  <div className="bg-opacity-40 p-10 hero-overlay2">
  </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Explore Top real state in Nepal</h1>
      <p className="mb-5">Find Lands for Sale and Rent!</p>
      <Link to={'/land-for-sale'} className="btn btn-primary">Book now</Link>
    </div>
  </div>
  
</div>
  );
};
export default Hero;
