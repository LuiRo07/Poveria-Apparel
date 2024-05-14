// components
import SectionTitle from '../UnitComponents/Title';
import FeaturedCard from '../UnitComponents/FeaturedCard';
import { BsChevronCompactLeft, BsCheronCompactRight} from 'react-icons/bs';

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
        id: 1,
        price: 33.99,
        imageDefault: blueScarf,
        imageHover: watch
    },
    {
        id: 2,
        price: 33.99,
        imageDefault: pocketShirt,
        imageHover: whiteShoes
    },
    {
        id: 3,
        price: 33.99,
        imageDefault: greySkirt,
        imageHover: jeans
    },
    {
        id: 4,
        price: 33.99,
        imageDefault: trenchCoat,
        imageHover: denimSweater
    }
]

function FeaturedSection() {

    return (
        <div>
            <SectionTitle title={"Featured"} />
            <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl cursor-pointer text-slate-500">
                <BsChevronCompactLeft size={30} />
            </div>
            <div className="grid grid-cols-4 p-12 gap-6">
            {products.map((product) => (
                <FeaturedCard key={product.name} product={product} />
            ))}
            </div>
            <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl cursor-pointer text-slate-500">
                <BsCheronCompactRight size={30} />
            </div>
        </div>
    )
}

export default FeaturedSection;
