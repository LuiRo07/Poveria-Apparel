import React, { useRef} from "react";
import Slider from "react-slick";

// images
import banner1 from "/assets/images/banners/banner-1.png";
import banner2 from "/assets/images/banners/banner-2.png";
import banner3 from "/assets/images/banners/banner-3.png";
import banner4 from "/assets/images/banners/banner-4.png";
import banner5 from "/assets/images/banners/banner-5.png";

function BannerSection() {
  let sliderRef = useRef(null);

  const pause = () => {
    sliderRef.slickPause();
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300
  };

  return (
    <div class="slider-container" onMouseEnter={pause}>
      <Slider ref={slider => (sliderRef = slider)} {...settings} >
        <div>
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
        <div>
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
      </Slider>
    </div>
  );
}

export default BannerSection;
