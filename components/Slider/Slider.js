// components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows:true
};

const CardSlider = ({children}) => {
    return (
        <Slider {...settings} style={{width:'100%'}} >
            {children}
        </Slider>
    );
};

export default CardSlider;
