import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

ProductCar.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageDefault: PropTypes.string.isRequired,
        imageHover: PropTypes.string.isRequired
    })
}

function FeaturedCard({ product }) {

    return (
        <div className="group overflow-h-hidden">
            <div>
                <img src={product.imageDefault} 
                    alt={product.name}
                />
            </div>
            <div>
                <img src={product.imageHover} />
            </div>
            <ul className="flex">
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><CiStar /></li>
                <li><CiStar /></li>
            </ul>
            <h2 className="text-lg font-medium text-gray-900 mb-2">{prdocut.name}</h2>
            <p className="text-xl font-medium text-gray-900">{product.price}</p>
        </div>
    )
}

export default FeaturedCard;
