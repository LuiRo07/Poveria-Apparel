import React from "react";
import banner1 from "/assets/images/banners/banner-1.png";
import banner2 from "/assets/images/banners/banner-2.png";
import banner3 from "/assets/images/banners/banner-3.png";
import banner4 from "/assets/images/banners/banner-4.png";
import banner5 from "/assets/images/banners/banner-5.png";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function BannerSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      SlidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="slider-container">
      <div className="px-20 py-12">
        <Carousel responsive={responsive} infinite={true}>
          <div className="px">
            <img src={banner1} alt={"Company Logo"} />
          </div>
          <div>
            <img src={banner2} alt={"Company Logo"} />
          </div>
          <div>
            <img src={banner3} alt={"Company Logo"} />
          </div>
          <div>
            <img src={banner4} alt={"Company Logo"} />
          </div>
          <div>
            <img src={banner5} alt={"Company Logo"} />
          </div>
          <div className="px">
            <img src={banner1} alt={"Company Logo"} />
          </div>
          <div>
            <img src={banner2} alt={"Company Logo"} />
          </div>
          <div>
            <img src={banner3} alt={"Company Logo"} />
          </div>
          <div>
            <img src={banner4} alt={"Company Logo"} />
          </div>
          <div>
            <img src={banner5} alt={"Company Logo"} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default BannerSection;
