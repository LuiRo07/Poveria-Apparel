// components
import SectionTitle from '../UnitComponents/Title';
import ProductCard from '../UnitComponents/ProductCard';

// images
import blueScarf from '../../assets/images/products/apparel/scarf.jpg';
import watch from '../../assets/images/products/apparel/women-watch.jpg';
import pocketShirt from '../../assets/images/products/apparel/pocket-shirt.jpg';
import whiteShoes from '../../assets/images/products/apparel/white-shoes.jpg';
import greySkirt from '../../assets/images/products/apparel/linen-skirt.jpg';
import jeans from '../../assets/images/products/apparel/women-jeans.jpg';
import trenchCoat from '../../assets/images/products/apparel/women-trenchCoat.jpg';
import denimSweater from '../../assets/images/products/apparel/denim-sweater.jpg';

const newProducts = [
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
            <div>
            <SectionTitle title={"Featured"} />
                {newProducts.map((product) => {
                    <ProductCard key={product.name} product={product} />
                })}

            </div>
        </div>
    )
}

export default FeaturedSection;
