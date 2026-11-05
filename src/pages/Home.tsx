import Carousel from "../components/Carousel";
import { slides } from "../data/sliderData";

function Home() {
  return <Carousel slides={slides} autoSlide={true} autoSlideInterval={2000} />;
}

export default Home;
