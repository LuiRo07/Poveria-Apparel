import womenPurse from '../../assets/images/products/featured/women-purse.png'
import sunGlasses from '../../assets/images/products/featured/sunglasses.png';
import highHeelShoes from '../../assets/images/products/featured/high-heel-shoes.png';
import moneyBagIcon from '../../assets/icons/money-bag.png';
import headphoneIcon from '../../assets/icons/headphone.png';
import movingTruckIcon from '../../assets/icons/moving-truck.png';
import rocketShipIcon from '../../assets/icons/startup.png';

function ProductCard({ imageUrl, imageAlt, title }) {
    return (
        <div className="p-2 inline-flex rounded-sm bg-slate-200 overflow-hidden cursor-pointer">
            <div className="ltr:mr-1 self-center">
                <h3 className="font-semibold mb-4 text-2xl">{title}</h3>
                <a href="#" className="underline">VIEW MORE</a>
            </div>
            <img className="hover:scale-125 transition-all ease-in" src={imageUrl} alt={imageAlt}></img>
        </div>
    )
}

function ServiceIcon({imageUrl, imageAlt, title, subTitle}) {
    return (
            <div className="flex items-center">
                <div>
                    <img className="hover:bg-black/50 hover:text-slate-100 bg-slate-600/25 rounded-full size-16 p-4 mr-4 cursor-pointer" src={imageUrl} alt={imageAlt} />
                </div>
                <div className="ltr:ml-9">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                </div>
            </div>
    )
}

function FeaturedProductCards() {
    return (
        <div className="border-b-2 py-7 px-4">
            <div className="w-full py-3.5 flex justify-around gap-11 mb-10">
                <ProductCard imageUrl={womenPurse} imageAlt="Women purse" title="Buy Branded Purses"/>
                <ProductCard imageUrl={sunGlasses} imageAlt="Men sunglasses" title="Buy Men's Glasses"/>
                <ProductCard imageUrl={highHeelShoes} imageAlt="high heel shoes" title="Party Heels Shoes"/>
            </div>
            <div className="w-full py-3.5 flex justify-around gap-2">
                <ServiceIcon imageUrl={moneyBagIcon} imageAlt={'bag of money icon'}  title={'Money Back Service'} subTitle={'Within 30 Days'} />
                <ServiceIcon imageUrl={headphoneIcon} imageAlt={'headset icon'}  title={'Best Online Support'} subTitle={'Hourse: 8AM - 11PM'} />
                <ServiceIcon imageUrl={movingTruckIcon} imageAlt={'moving truck icon'}  title={'Free World Shipping'} subTitle={'Orders Over $100'} />
                <ServiceIcon imageUrl={rocketShipIcon} imageAlt={'rocket ship icon'}  title={'WIN $100 SHOP'} subTitle={'Enter Now!'} />
            </div>
        </div>
    )
}

export default FeaturedProductCards;