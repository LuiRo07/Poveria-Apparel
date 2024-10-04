import React from "react";
import SectionTitle from "../UnitComponents/Title";
import Slider from "react-slick";

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
    dots: false,
    infinite: true,
    speed: 500,
    SlidesToShow: 3,
    SlidesToScroll: 3,
  };

  const divStyling = "flex justify-center px-10 gap-8";

  return (
    <div className="mb-11">
      <SectionTitle title={"From The Blog"} />
      <Slider>
        <div>
          <div className={divStyling}>
            <img className="w-[280px] h-" src={products[0].imageDefault} />
            <img className="w-[280px] h-auto" src={products[1].imageDefault} />
            <img className="w-[280px] h-auto" src={products[2].imageDefault} />
          </div>
        </div>
        <div>
          <img className="w-[280px] h-auto" src={products[3].imageDefault} />
        </div>
      </Slider>
    </div>
  );
}

export default FromTheBlog;
