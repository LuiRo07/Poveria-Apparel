import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const FeaturedCard = ({ product }) => {

    return (
        <div>
            <div>
                <img src={product.imageDefault} 
                    alt={product.name}
                />
            </div>
            <div className="mb-4">
                <img className="hidden" src={product.imageHover} />
            </div>
            <ul className="flex">
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><CiStar /></li>
                <li><CiStar /></li>
            </ul>
            <h2 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h2>
            <p className="text-xl font-medium text-gray-900">${product.price}</p>
        </div>
    )
}

FeaturedCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      imageDefault: PropTypes.string.isRequired,
      imageHover: PropTypes.string.isRequired
    })
  };

export default FeaturedCard;
