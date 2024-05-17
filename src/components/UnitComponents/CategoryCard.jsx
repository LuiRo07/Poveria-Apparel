import { useState } from 'react';
import PropTypes from 'prop-types';


const CategoryCard = ({ product }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="bg-black max-w-sm cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <img 
                src={product.imageDefault}
                alt={product.name}
                className="w-full h-full object-cover object-center mb-4"    
            />
            <div className={`absolute inset-24 bg-slate-50/80 bg-opacity-50 flex flex-col gap-4 items-center justify-center ${hovered? 'opacity-100' : 'opacity-0'} transition duration-500 ease-in-out`}>
                <h2 className="text-lg font-medium">{product.name}</h2>
                <h3 className="text-lg font-medium underline">Shop Now</h3>
            </div>

        </div> 
    )
}

CategoryCard.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageDefault: PropTypes.string.isRequired,
    })
  };


export default CategoryCard;


