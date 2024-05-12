import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function QuoteSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
    return (
        <div className="bg-[#F2F2F2] h-[30vh] flex justify-center items-center w-full">
            <Slider {...settings}>
                <div className="flex">
                    <h3 className="text-3xl">Very Good Designing, Flexible. Best Fits</h3>
                    <span>Tom (Web Developer)</span>
                </div>
            </Slider>
        </div>
    )
}

export default QuoteSlider