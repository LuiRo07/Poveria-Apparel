import React from 'react';
import Slider from 'react-slick';
import { RiDoubleQuotesL } from 'react-icons/ri';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function QuoteSlider() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      const divStyling = "py-20 gap-10 flex flex-col justify-center items-center bg-gray-600/50 text-slate-";
      const quoteStyling = "size-12";
      const fontSize = "text-2xl";
    
    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                <div>
                    <div className={divStyling}>
                        <RiDoubleQuotesL className={quoteStyling} /> 
                        <h3 className={fontSize}>Very Good Designing, Flexible. Best Fits</h3>
                        <span>Tom (Web Developer)</span>
                    </div>
                </div>
                <div>
                    <div className={divStyling}> 
                        <RiDoubleQuotesL className={quoteStyling}/> 
                        <h3 className={fontSize}>Very Good Designing, Flexible. Best Fits</h3>
                        <span>Tom (Web Developer)</span>
                    </div>
                </div>
                <div >
                    <div className={divStyling}> 
                        <RiDoubleQuotesL className={quoteStyling}/> 
                        <h3 className={fontSize}>Very Good Designing, Flexible. Best Fits</h3>
                        <span>Tom (Web Developer)</span>
                    </div>
                </div>
        </Slider>
        </div>
    )
}

export default QuoteSlider