import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import type { SlideInterface } from "../data/sliderData";

interface CarouselInterface {
  autoSlide: boolean;
  slides: SlideInterface[];
  autoSlideInterval: number;
}

function Carousel({ autoSlide, autoSlideInterval, slides }: CarouselInterface) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const prevSlide = () =>
    setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  const nextSlide = useCallback(() => {
    return setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);
  }, [slideIndex, slides]);
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  useEffect(() => {
    if (!autoSlide || isHover) return;
    const timer = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(timer);
  }, [nextSlide, autoSlide, autoSlideInterval, isHover]);

  return (
    <div
      className="w-full h-75 relative group"
      tabIndex={0}
      aria-label="Image Carousel"
      onKeyDown={(e) => handleKeyDown(e)}
      onBlur={() => setIsHover(false)}
      onFocus={() => setIsHover(true)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[slideIndex]?.url})` }}
        aria-label={`slide ${slideIndex + 1} of ${slides.length}: ${slides[slideIndex].title || "image"}`}
      >
        <h2 className="absolute left-[50%] top-[50%] translate-[-50%] text-3xl font-bold bg-slate-950/60 text-white max-w-5xl text-center w-full inline-block p-5 rounded-full">
          {slides[slideIndex]?.title}
        </h2>
      </div>

      <button type="button" onClick={prevSlide} aria-label="Previous Slide">
        <ChevronLeft
          aria-hidden={true}
          className="w-10 h-10 md:hidden md:group-hover:block text-white absolute top-[50%] left-5 translate-y-[-50%] cursor-pointer"
        />
      </button>

      <button type="button" onClick={nextSlide} aria-label="Next Slide">
        <ChevronRight
          aria-hidden={true}
          className="w-10 h-10 md:hidden md:group-hover:block text-white absolute top-[50%] right-5 translate-y-[-50%] cursor-pointer"
        />
      </button>

      <div
        role="tablist"
        aria-label="Slide Navigation Control"
        className="flex justify-center gap-2 absolute bottom-5 left-[50%] translate-x-[-50%]"
      >
        {slides.map((_, index) => (
          <button
            role="tab"
            key={index}
            onClick={() => setSlideIndex(index)}
            aria-selected={index === slideIndex}
            aria-label={` Go to slide ${index + 1}: ${slides[index]?.title}`}
            className={`w-3 h-3 rounded-full cursor-pointer bg-gray-700 border-2 ${index === slideIndex ? "border-white" : "border-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
