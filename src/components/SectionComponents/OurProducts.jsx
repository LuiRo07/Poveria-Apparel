import React from 'react';
import ProductCard from "../UnitComponents/ProductCard";
import blueShirt from "../../assets/images/products/apparel/blue-shirt.png";
import cardigan from "../../assets/images/products/apparel/cardigan.jpg";
import denimSweater from '../../assets/images/products/apparel/denim-sweater.jpg';
import graphicShirt from '../../assets/images/products/apparel/graphix-tee.png';

const products = [
    {
      name: 'Product 1',
      description: 'This is product 1',
      price: 19.99,
      imageDefault: blueShirt,
      imageHover: cardigan
    },
    {
      name: 'Product 2',
      description: 'This is product 2',
      price: 29.99,
      imageDefault: denimSweater,
      imageHover: graphicShirt
    }
  ];

function CardProducts() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      );
}

export default CardProducts

