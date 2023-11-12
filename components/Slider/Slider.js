// components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive:[
    {
      breakpoint:1440,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint:1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint:768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint:500,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

const CardSlider = ({children}) => {
  const slider = React.useRef(null);
  return (
    <>
      <Slider ef={slider} {...settings}  >
        {children}
      </Slider>
    </>
  );
};

export default CardSlider;
