// components
import SectionTitle from '../UnitComponents/Title';
import ProductCard from '../UnitComponents/ProductCard';
import FeaturedCard from '../UnitComponents/FeaturedCard';

// images
import blueScarf from '../../assets/images/products/apparel/scarf.jpg';
import watch from '../../assets/images/products/apparel/women-watch.jpg';
import pocketShirt from '../../assets/images/products/apparel/pocket-shirt.jpg';
import whiteShoes from '../../assets/images/products/apparel/white-shoes.jpg';
import greySkirt from '../../assets/images/products/apparel/linen-skirt.jpg';
import jeans from '../../assets/images/products/apparel/women-jeans.jpg';
import trenchCoat from '../../assets/images/products/apparel/women-trenchCoat.jpg';
import denimSweater from '../../assets/images/products/apparel/denim-sweater.jpg';

const products = [
    {
        name: "Blue Scarf",
        price: 33.99,
        imageDefault: blueScarf,
        imageHover: watch
    },
    {
        name: "Blue Scarf",
        price: 33.99,
        imageDefault: pocketShirt,
        imageHover: whiteShoes
    },
    {
        name: "Blue Scarf",
        price: 33.99,
        imageDefault: greySkirt,
        imageHover: jeans
    },
    {
        name: "Blue Scarf",
        price: 33.99,
        imageDefault: trenchCoat,
        imageHover: denimSweater
    }
]

function FeaturedSection() {

    return (
        <div>
            <SectionTitle title={"Featured"} />
            <div className="grid grid-cols-4 p-12 gap-6">
                <img src={products[0].imageDefault} />
                <img src={products[1].imageDefault} />
                <img src={products[2].imageDefault} />
                <img src={products[3].imageDefault} />
            </div>
            {/* {products.map((product) => {
                <FeaturedCard key={product.name} product={product} />
            })} */}
        </div>
    )
}

export default FeaturedSection;
