import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const FeaturedCard = ({ product }) => {

    return (
        <div className="mr-4">
            <div>
                <img src={product.imageDefault} 
                    alt={product.name}
                />
            </div>
            <ul className="flex my-2">
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><CiStar /></li>
                <li><CiStar /></li>
            </ul>
            <h2 className="text-lg font-normal text-gray-900 mb-2">{product.name}</h2>
            <p className="text-xl font-normal text-gray-900">${product.price}</p>
        </div>
    )
}

FeaturedCard.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageDefault: PropTypes.string.isRequired,
      imageHover: PropTypes.string.isRequired
    })
  };

export default FeaturedCard;
