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
import SectionTitle from '../UnitComponents/Title';



const products = [
    {
      name: 'Blue Fannel Shirt',
      price: 19.99,
      imageDefault: blueShirt,
      imageHover: cardigan
    },
    {
      name: 'jean jacket',
      price: 29.99,
      imageDefault: denimSweater,
      imageHover: graphicShirt
    },
    {
      name: 'Grey Sweater',
      price: 19.99,
      imageDefault: greySweater,
      imageHover: jeans
    },
    {
      name: 'Denim Jeans',
      price: 29.99,
      imageDefault: jeans,
      imageHover: greySweater
    },
    {
      name: 'Polka Dot Skirt',
      price: 19.99,
      imageDefault: polkaDotSkirt,
      imageHover: Skirt
    },
    {
      name: 'Grey linen skirt',
      price: 29.99,
      imageDefault: Skirt,
      imageHover: backPack
    },
    {
      name:'Women Shirt',
      price: 19.99,
      imageDefault: pocketShirt,
      imageHover: polkaDotSkirt
    }
  ];

function CardProducts() {
    return (
        <div className="my-9">
          <SectionTitle title="Our Products" />
          <ul className="flex justify-center gap-3 mt-5">
            <li><a href="#">Latest</a></li>
            <li><a className="text-slate-600 hover:text-black" href="#">Bestseller</a></li>
            <li><a className="text-slate-600 hover:text-black" href="#">Special</a></li>
          </ul>

          {/* images are mapped */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 p-12">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
          </div>
        </div>
      );
}

export default CardProducts

 