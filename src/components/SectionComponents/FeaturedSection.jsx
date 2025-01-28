// components
import SectionTitle from "../UnitComponents/SectionTitle";
import FeaturedCard from "../UnitComponents/FeaturedCard";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import blueScarf from "/assets/images/products/apparel/scarf.jpg";
import watch from "/assets/images/products/apparel/women-watch.jpg";
import pocketShirt from "/assets/images/products/apparel/pocket-shirt.jpg";
import whiteShoes from "/assets/images/products/apparel/white-shoes.jpg";
import greySkirt from "/assets/images/products/apparel/linen-skirt.jpg";
import jeans from "/assets/images/products/apparel/women-jeans.jpg";
import trenchCoat from "/assets/images/products/apparel/women-trenchCoat.jpg";
import denimSweater from "/assets/images/products/apparel/denim-sweater.jpg";

const products = [
  {
    name: "Coral Double Stripe High",
    price: 33.99,
    imageDefault: blueScarf,
  },
  {
    name: "Navy White Stripe Furschia Shirt",
    price: 33.99,
    imageDefault: pocketShirt
  },
  {
    name: "Linen-grey Long Skirt",
    price: 33.99,
    imageDefault: greySkirt
  },
  {
    name: "Winter Trench Coat",
    price: 33.99,
    imageDefault: trenchCoat
  },
  {
    name: "Spring Shoes",
    price: 55.99,
    imageDefault: whiteShoes
  },
];

function FeaturedSection() {
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
    <div>
      <SectionTitle title={"Featured"} />
      <div className="px-4">
        <Carousel responsive={responsive}>
          {products.map((product) => (
            <FeaturedCard key={product.name} product={product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default FeaturedSection;
