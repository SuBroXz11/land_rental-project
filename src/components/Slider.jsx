import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      interval={2000} // Change slide every 3 seconds
      infiniteLoop={true}
      className="my-5"
    >
      <div >
        <img src="https://gharjagganepal.com/wp-content/uploads/WPL/8432/thimg_1_1200x638.webp" alt="Slide 1" />
      </div>
      <div>
        <img src="https://gharjagganepal.com/wp-content/uploads/WPL/8432/thimg_6_1200x638.webp" alt="Slide 2" />
      </div>
      <div>
        <img src="https://gharjagganepal.com/wp-content/uploads/WPL/8432/thimg_3_1200x638.webp" alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
