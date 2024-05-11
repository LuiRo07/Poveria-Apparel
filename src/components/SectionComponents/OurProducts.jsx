import React from 'react';
import ProductCard from "../UnitComponents/ProductCard";
import blueShirt from "../../assets/images/products/apparel/blue-shirt.png";
import cardigan from "../../assets/images/products/apparel/cardigan.jpg";
import denimSweater from '../../assets/images/products/apparel/denim-sweater.jpg';
import graphicShirt from '../../assets/images/products/apparel/graphix-tee.png';
import greySweater from '../../assets/images/products/apparel/grey-sweater.jpg';
import jeans from '../../assets/images/products/apparel/jeans.png';
import backPack from '../../assets/images/products/apparel/lightGrey-backpack.jpg';
import Skirt from '../../assets/images/products/apparel/linen-skirt.jpg';
import pocketShirt from '../../assets/images/products/apparel/pocket-shirt.jpg';
import polkaDotSkirt from '../../assets/images/products/apparel/polka-dot-skirt.jpg';
import scarf from '../../assets/images/products/apparel/scarf.jpg';
import watch from '../../assets/images/products/apparel/watch.jpg';
import whiteShoes from '../../assets/images/products/apparel/white-shoes.jpg';



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
    },
    {
      name: 'Product 3',
      description: 'This is Product 3',
      price: 19.99,
      imageDefault: greySweater,
      imageHover: jeans
    },
    {
      name: 'Product 4',
      description: 'This is product 4',
      price: 29.99,
      imageDefault: jeans,
      imageHover: greySweater
    },
    {
      name: 'Product 5',
      description: 'This is Product 6',
      price: 19.99,
      imageDefault: backPack,
      imageHover: Skirt
    },
    {
      name: 'Product 6',
      description: 'This is product 6',
      price: 29.99,
      imageDefault: Skirt,
      imageHover: backPack
    },
    {
      name: 'Product 7',
      description: 'This is Product 7',
      price: 19.99,
      imageDefault: pocketShirt,
      imageHover: polkaDotSkirt
    },
    {
      name: 'Product 8',
      description: 'This is Product 8',
      price: 29.99,
      imageDefault: polkaDotSkirt,
      imageHover: pocketShirt
    },
    {
      name: 'Product 9',
      description: 'This is Product 9',
      price: 19.99,
      imageDefault: scarf,
      imageHover: watch
    },
    {
      name: 'Product 10',
      description: 'This is Product 10',
      price: 29.99,
      imageDefault: watch,
      imageHover: scarf
    },
    {
      name: 'Product 11',
      description: 'This is Product 11',
      price: 19.99,
      imageDefault: whiteShoes,
      imageHover: watch
    },
    {
      name: 'Product 12',
      description: 'This is Product 12',
      price: 29.99,
      imageDefault: denimSweater,
      imageHover: graphicShirt
    },
    {
      name: 'Product 13',
      description: 'This is Product 13',
      price: 19.99,
      imageDefault: Skirt,
      imageHover: backPack
    },
    {
      name: 'Product 14',
      description: 'This is Product 14',
      price: 29.99,
      imageDefault: polkaDotSkirt,
      imageHover: scarf
    }
  ];

function CardProducts() {
    return (
      <>
        <h2>Our Products</h2>
        <ul>
          <li><a href="#">Latest</a></li>
          <li><a href="#">Bestseller</a></li>
          <li><a href="#">Special</a></li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-12">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </>
      );
}

export default CardProducts

