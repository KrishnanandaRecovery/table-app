import Carousel from "../components/Carousel";
import { slides } from "../data/sliderData";

function Home() {
  return (
    <div>
      <Carousel slides={slides} autoSlide={true} autoSlideInterval={2000} />
    </div>
  );
}

export default Home;
