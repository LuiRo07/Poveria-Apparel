import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const ProductCard = ({ product }) => {
  const defaultStyling = {
    styling: ""
  }

  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group overflow-y-hidden lg:px-20 md:px-4 x-sm:px-2"
    >

      <img 
        src={hovered? product.imageHover : product.imageDefault}
        alt={product.name}
        className="2-full h-auto object-cover object-center rounded-lg mb-4"
      />

      {/* testing purpose */}

      <img
        src={product.imageHover}
        alt={product.name}
        className="hidden h-auto object-cover object-center rounded-lg z-10 cursor-pointer -translate-y-full -translate-x-full group-hover:ease-in group-hover:duration-500 group-hover:translate-x-[0%]"
      />

      <ul className='flex'>
        <li><FaStar /></li>
        <li><FaStar /></li>
        <li><FaStar /></li>
        <li><CiStar /></li>
        <li><CiStar /></li>
      </ul>
      <h2 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h2>
      <p className="text-xl font-medium text-gray-900">${product.price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageDefault: PropTypes.string.isRequired,
    imageHover: PropTypes.string.isRequired
  })
};

export default ProductCard;