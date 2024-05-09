import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Advance to the next slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: setCurrentSlide, // Update current slide after change
  };

  const handleAnimFinished = () => {
    setRunning(false); // Animation finished
  };

  return (
    <div id="banner">
      <Slider {...settings}>
        <div>
          <img src="/banner(1).jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="/banner1.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="/banner2.jpg" alt="Banner 3" />
        </div>
        <div>
          <img src="/banner3.jpg" alt="Banner 4" />
        </div>
        <div>
          <img src="/banner4.jpg" alt="Banner 5" />
        </div>
      </Slider>
      <div
        className="nivo-caption"
        style={{ display: running ? 'block' : 'none', opacity: '0.8' }}
      >
        {/* Placeholder for caption */}
        <p></p>
      </div>
    </div>
  );
};

export default Banner;
