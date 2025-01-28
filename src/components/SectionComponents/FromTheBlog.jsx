import React from "react";
import Slider from "react-slick";
import SectionTitle from "../UnitComponents/SectionTitle";

// images
import blog1 from "/assets/images/products/apparel/blog1.jpg";
import blog2 from "/assets/images/products/apparel/blog2.jpg";
import blog3 from "/assets/images/products/apparel/blog3.jpg";
import blog4 from "/assets/images/products/apparel/blog4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    imageDefault: blog1,
  },
  {
    imageDefault: blog2,
  },
  {
    imageDefault: blog3,
  },
  {
    imageDefault: blog4,
  },
];

function FromTheBlog() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <div className="mb-11">
      <SectionTitle title={"From The Blog"} />
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className="mr-2">
              <img src={products[0].imageDefault} />
            </div>
          </div>
          <div>
            <div className="mr-2">
              <img src={products[1].imageDefault} />
            </div>
          </div>
          <div>
            <div className="mr-2">
              <img src={products[2].imageDefault} />
            </div>
          </div>
          <div>
            <div className="mr-2">
              <img src={products[3].imageDefault} />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default FromTheBlog;
