import React from 'react';
import Slider from 'react-slick';
import { RiDoubleQuotesL } from 'react-icons/ri';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function QuoteSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const divStyling = "py-20 gap-10 flex flex-col justify-center items-center bg-gray-600/50 text-slate-";
      const quoteStyling = "size-12"
    
    return (
        <Slider {...settings}>
            <div>
                <div className={divStyling}>
                    <RiDoubleQuotesL className={quoteStyling} /> 
                    <h3 className="text-3xl">Very Good Designing, Flexible. Best Fits</h3>
                    <span>Tom (Web Developer)</span>
                </div>
            </div>
            <div>
                <div className={divStyling}> 
                    <RiDoubleQuotesL className={quoteStyling}/> 
                    <h3 className="text-3xl">Very Good Designing, Flexible. Best Fits</h3>
                    <span>Tom (Web Developer)</span>
                </div>
            </div>
            <div >
                <div className={divStyling}> 
                    <RiDoubleQuotesL className={quoteStyling}/> 
                    <h3 className="text-3xl">Very Good Designing, Flexible. Best Fits</h3>
                    <span>Tom (Web Developer)</span>
                </div>
            </div>
    </Slider>
    )
}

export default QuoteSlider