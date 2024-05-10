import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 max-w-sm cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={hovered? product.imageHover : product.imageDefault}
        alt={product.name}
        className="w-full h-auto object-cover object-center rounded-lg mb-4"
      />
      <h2 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h2>
      <p className="text-gray-500 mb-4">{product.description}</p>
      <p className="text-xl font-medium text-gray-900">${product.price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageDefault: PropTypes.string.isRequired,
    imageHover: PropTypes.string.isRequired
  })
};

export default ProductCard;